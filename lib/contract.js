import * as ethers from "ethers";
import { RelayProvider } from "@opengsn/provider/dist/RelayProvider";
const HttpProvider = require( 'web3-providers-http')


class Contract {
    constructor() { }

    async init() {
        const abi = new ethers.utils.Interface([
            "function mint(address to, string memory claimCode) external",
            "function claimed(string memory claimCode) external view returns (bool)",
        ]);

        let provider;
        let from;
        // switch (process.env.NEXT_APP_NETWORK)
        switch ("rinkeby") {
            case "localhost":
                provider = new ethers.providers.JsonRpcProvider();
                break;
            case "rinkeby": {

                const gsnConfig = {
                    relayLookupWindowBlocks: 1e5,
                    relayRegistrationLookupBlocks: 1e5,
                    pastEventsQueryMaxPageSize: 2e4,
                    paymasterAddress : "0x5B167e91af130740AD6c67Bc200C17425e17A988",
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
                        paymasterAddress : null, //none currently deployed
                        gasPrice: 0
                      }
    
                      let httpweb3provider = new HttpProvider(process.env.NEXT_PUBLIC_GNOSIS_INFURA_URL)
    
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
        const podAddress="0xFfa4F08F9EFDFC349A5Ec4Fb7F15256a93047d79";
        
        const podContract = new ethers.Contract(
            podAddress,
            abi, 
            signer
        )

        
        this.contract = podContract.connect(provider.getSigner(from))
         
    }

    isClaimed(claimCode) {
        return this.contract.claimed(claimCode);
    }

    async claim(claimerAddress, claimCode) {
        // const tx = await this.contract.mint(claimerAddress, claimCode);
        // return tx.wait();
        function getTime() {
            const now = (new Date()).getTime();
            if (lastNow == null) { lastNow = now; }
            const result = parseInt(String(now - lastNow)) / 1000;
            lastNow = now;
            return result;
        }

        await this.contract.mint(claimerAddress, claimCode)
            .then((mintTxn) => {
                console.log("MINT TXN HASH", mintTxn.hash)
                // Transaction goes through but currently wait for transaction is not returning anything
                (this.regularProvider).waitForTransaction(mintTxn.hash)
                    .then((transaction) => {
                    console.log('Mint Transaction Mined: ' + transaction.hash);
                    // DO SOMETHING HERE TO ALERT FRONTEND
            })
        })


        
    }
}

module.exports = Contract;


