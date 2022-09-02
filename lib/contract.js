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
                    paymasterAddress : "0xf7Ff1339513e1a66550173630E8dbf871fd1c0C2",
                    gasPrice: 0
                  }
          
          
                  let httpweb3provider = new HttpProvider("https://eth-rinkeby.alchemyapi.io/v2/lUClO9NkAFshlkgvnVQD0IwrkYIRCHU_")
                //   setLocalHttpProvider(httpweb3provider)
          
                  const gsnProvider = await RelayProvider.newProvider({
                    provider: httpweb3provider,
                    config: gsnConfig
                  }).init()
          
                  
                provider =  new ethers.providers.Web3Provider(gsnProvider)
                break;
                }
                case "gnosis": provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/gnosis"); break;
            default:
                new ethers.providers.getDefaultProvider(process.env.NETWORK);
                break;
        }

        const signer = new ethers.Wallet(process.env.WALLET_KEY, provider);
        console.log("signer", signer)
        this.contract = new ethers.Contract(
            process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
            abi, 
            signer
        ).connect(signer);
    }

    isClaimed(claimCode) {
        return this.contract.claimed(claimCode);
    }

    async claim(claimerAddress, claimCode) {
        const tx = await this.contract.mint(claimerAddress, claimCode);
        return tx.wait();
    }
}

module.exports = Contract;
