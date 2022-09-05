import * as ethers from "ethers";
import { RelayProvider } from "@opengsn/provider/dist/RelayProvider";
const HttpProvider = require( 'web3-providers-http')
import PODcontracts from './POD-contracts.json'


class Contract {
    constructor() { }

    async init() {
        const abi = new ethers.utils.Interface([
            "function mint(address to, string memory claimCode) external",
            "function claimed(string memory claimCode) external view returns (bool)",
        ]);

        let provider;
        let from;
        //  CHANGE NETWORK HERE FOR CORRECT DEPLOYMENT
        let network = "gnosis"

        switch (network) {
            case "localhost":
                provider = new ethers.providers.JsonRpcProvider();
                break;
            case "rinkeby": {

                const gsnConfig = {
                    relayLookupWindowBlocks: 1e5,
                    relayRegistrationLookupBlocks: 1e5,
                    pastEventsQueryMaxPageSize: 2e4,
                    paymasterAddress : "0xcDa54Fe872652bB5F6Db805f0aB45132B18cfFbc",
                    gasPrice: 0
                  }

                  let httpweb3provider = new HttpProvider(process.env.NEXT_PUBLIC_RINKEBY_INFURA_URL)

                  this.regularProvider = httpweb3provider;

                  const gsnProvider = await RelayProvider.newProvider({
                    provider: httpweb3provider,
                    config: gsnConfig
                  }).init()

                  const account = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
                  gsnProvider.addAccount(account.privateKey)
                  from = account.address
          
                  
                provider =  new ethers.providers.Web3Provider(gsnProvider)
                break;
                }
                case "gnosis": {

                    const gsnConfig = {
                        relayLookupWindowBlocks: 1e5,
                        relayRegistrationLookupBlocks: 1e5,
                        pastEventsQueryMaxPageSize: 2e4,
                        paymasterAddress : "0xB18E9CB7212a41a75Ea63d7831700b33517018C8",
                        gasPrice: 0
                      }
    
                      let httpweb3provider = new HttpProvider(process.env.NEXT_PUBLIC_GNOSIS_URL)
    
                      this.regularProvider = httpweb3provider;
    
                      const gsnProvider = await RelayProvider.newProvider({
                        provider: httpweb3provider,
                        config: gsnConfig
                      }).init()
    
                      const account = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
                      gsnProvider.addAccount(account.privateKey)
                      from = account.address
              
                      
                    provider =  new ethers.providers.Web3Provider(gsnProvider)
                    break;
                    }

            default:
                new ethers.providers.getDefaultProvider(process.env.NETWORK);
                break;
        }
        
        const signer = provider.getSigner(from)
        // RINKEBY ONLY. only doing this for now to speed up testing; will/should be put into a more organized strcuture
        // console.log(PODcontracts[network])
        // const podAddress="0x9eE669Eada3625D2a7bA52036C19B09b715649c5";
        
        const podContract = new ethers.Contract(
            PODcontracts[network],
            abi, 
            signer
        )

        
        this.contract = podContract.connect(provider.getSigner(from))
         
    }

    isClaimed(claimCode) {
        return this.contract.claimed(claimCode);
    }

    async claim(claimerAddress, claimCode) {

        const tx = await this.contract.mint(claimerAddress, claimCode)
        const receipt = await tx.wait()
        return receipt;  
    }
}

module.exports = Contract;


