import * as ethers from "ethers";
import { RelayProvider } from "@opengsn/provider/dist/RelayProvider";
const HttpProvider = require( 'web3-providers-http')
// const testAbi = require('./POD.json').abi

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
                //   https://eth-rinkeby.alchemyapi.io/v2/lUClO9NkAFshlkgvnVQD0IwrkYIRCHU_"
                //   https://rinkeby.infura.io/v3/61b2fd20d10849dd93a482c6952500d9
                  let httpweb3provider = new HttpProvider("https://eth-rinkeby.alchemyapi.io/v2/lUClO9NkAFshlkgvnVQD0IwrkYIRCHU_")

          
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
                case "gnosis": provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/gnosis"); break;
            default:
                new ethers.providers.getDefaultProvider(process.env.NETWORK);
                break;
        }
        
        const signer = provider.getSigner(from)
        const podAddress="0xe89019eABE1A3E93C6fb916237AA63A1BaE866Fb";
        
        const podContract = new ethers.Contract(
            podAddress,
            abi, 
            signer
        )
        // 0xa16E02E87b7454126E5E10d957A927A7F5B5d2be

        
        this.contract = podContract.connect(provider.getSigner(from))
         
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




// import * as ethers from "ethers";
// import { RelayProvider } from "@opengsn/provider/dist/RelayProvider";
// const HttpProvider = require( 'web3-providers-http')
// const testAbi = require('./POD.json').abi

// class Contract {
//     constructor() { }

//     async init() {
//         const abi = new ethers.utils.Interface([
//             "function mint(address to, string memory claimCode) external",
//             "function claimed(string memory claimCode) external view returns (bool)",
//         ]);
//         let ethersProvider;
//         let account;
//         let from;
//         // switch (process.env.NEXT_APP_NETWORK)
//         switch ("rinkeby") {
//             case "localhost":
//                 ethersProvider = new ethers.providers.JsonRpcProvider();
//                 break;
//             case "rinkeby": {

//                 const gsnConfig = {
//                     relayLookupWindowBlocks: 1e5,
//                     relayRegistrationLookupBlocks: 1e5,
//                     pastEventsQueryMaxPageSize: 2e4,
//                     paymasterAddress : "0x5B167e91af130740AD6c67Bc200C17425e17A988",
//                     gasPrice: 0
//                   }

//                 // const WhitelistPaymaster = await ethers.getContractFactory('WhitelistPaymaster');
//                 // const paymaster = await WhitelistPaymaster.attach("0x5B167e91af130740AD6c67Bc200C17425e17A988")

//                 // const RelayHub = await ethers.getContractFactory('RelayHub');
//                 // const balance = await RelayHub.balanceOf("0x5B167e91af130740AD6c67Bc200C17425e17A988")
          
                  
//                 let httpweb3provider = new HttpProvider(process.env.RINKEBY_ALCHEMY_URL)
                
//                 const gsnProvider = await RelayProvider.newProvider({
//                     ethersProvider: httpweb3provider,
//                     config: gsnConfig
//                   }).init()

//                   account = new ethers.Wallet(process.env.PRIVATE_KEY, ethersProvider);

//                   console.log("account", account)
//                   gsnProvider.addAccount(account.privateKey)
//                   from = account.address

//                 ethersProvider =  new ethers.providers.Web3Provider(gsnProvider)
//                 break;

//                 }
//             case "gnosis": ethersProvider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/gnosis"); break;
//             default:
//                 new ethers.providers.getDefaultProvider(process.env.NETWORK);
//                 break;
//         }
        
        

        

//         const signer = ethersProvider.getSigner(account.address);
//         // const signer = ethersProvider.getSigner(ephemeralSigner.address);
//         // 0xe1AAF2B65484109968cabD5561F0aA2D0200Dd90

//         this.contract = new ethers.Contract('0xa16E02E87b7454126E5E10d957A927A7F5B5d2be', abi, signer)
        

//         // 0xa16E02E87b7454126E5E10d957A927A7F5B5d2be
//     }

//     isClaimed(claimCode) {
//         return this.contract.claimed(claimCode);
//     }

//     async claim(claimerAddress, claimCode) {
//         const tx = await this.contract.mint(claimerAddress, claimCode);
//         console.log("Claim Transaction:", tx)
//         return tx.wait();
//     }
// }

// module.exports = Contract;
