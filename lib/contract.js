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
        let account;

        let network = process.env.NETWORK;

        switch (network) {
            case "localhost":
                provider = new ethers.providers.JsonRpcProvider();
                break;

            case "rinkeby": {
              let httpweb3provider = new HttpProvider(process.env.RINKEBY_INFURA_URL)
              provider = new ethers.providers.Web3Provider(httpweb3provider)
              account = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
              break;
              }

            case "gnosis": {
              // provider =  new ethers.providers.AnkrProvider("homestead")
              let httpweb3provider = new HttpProvider(process.env.GNOSIS_URL)
              provider = new ethers.providers.Web3Provider(httpweb3provider)
              account = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
              break;
              }
              
            default:
                new ethers.providers.getDefaultProvider(process.env.NETWORK);
                break;
        }
        
     
        const signer = account.connect(provider)
    
        const podContract = new ethers.Contract(
            PODcontracts[network],
            abi, 
            signer)
   
        this.contract = podContract.connect(signer)

         
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


