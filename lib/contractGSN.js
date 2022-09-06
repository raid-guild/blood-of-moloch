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
        let account;
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
                    paymasterAddress : "0x2fe7598c88Aa5c0872E77c1aa225456c601e5EEc",
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




                account = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  
                provider =  new ethers.providers.AnkrProvider("homestead")
                break;

                }
            case "mumbai": {

                const gsnConfig = {
                    relayLookupWindowBlocks: 990,
                    relayRegistrationLookupBlocks: 990,
                    pastEventsQueryMaxPageSize: 990,
                    paymasterAddress: "0x3CaF87f531Eed2D2fBE2deE1954E4Fc5bd572aEF"
                    
                  }

                  let httpweb3provider = new HttpProvider(process.env.NEXT_PUBLIC_MUMBAI_PROVIDER_URL)

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
            case "polygon": {

              const gsnConfig = {
                  relayLookupWindowBlocks: 990,
                  relayRegistrationLookupBlocks: 990,
                  pastEventsQueryMaxPageSize: 990,
                  paymasterAddress: "0x3C916cf3020Ce1562D7B483F2DA1B04B1135D5b0"
                  
                }

                let httpweb3provider = new HttpProvider(process.env.NEXT_PUBLIC_POLYGON_PROVIDER_URL)

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
        
     
        const signer = account.connect(provider)
      
        // const signer = provider.getSigner(from)

        

        const podContract = new ethers.Contract(
            PODcontracts[network],
            abi, 
            signer)

        
        this.contract = podContract;

        // this.contract = podContract.connect(provider.getSigner(from))
         
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


