import * as ethers from "ethers";
import { RelayProvider } from "@opengsn/provider/dist/RelayProvider";

class Contract {
    constructor() { }

    async init() {
        const abi = new ethers.utils.Interface([
            "function mint(address to, string memory claimCode) external",
            "function claimed(string memory claimCode) external view returns (bool)",
        ]);

        let provider;
        switch (process.env.NETWORK) {
            case "localhost":
                provider = new ethers.providers.JsonRpcProvider();
                break;
            case "gnosis": {
                provider = new ethers.providers.JsonRpcProvider(
                    "https://rpc.ankr.com/gnosis"
                );
                const gsnProvider = RelayProvider.newProvider({
                    provider,
                    config: {
                        paymasterAddress: process.env.PAYMASTER_ADDRESS,
                    },
                });
                await gsnProvider.init();
                provider = new ethers.providers.Web3Provider(gsnProvider);
                break;
            }
            default:
                new ethers.providers.getDefaultProvider(process.env.NETWORK);
                break;
        }

        const signer = new ethers.Wallet(process.env.WALLET_KEY, provider);
        this.contract = new ethers.Contract(
            process.env.CONTRACT_ADDRESS,
            abi
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
