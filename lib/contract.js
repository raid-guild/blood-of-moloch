const ethers = require("ethers");

class Contract {
    constructor() {
        const abi = new ethers.utils.Interface([
            "function mint(address to, string memory claimCode) external",
            "function claimed(string memory claimCode) external view returns (bool)",
        ]);

        const provider = process.env.NETWORK === "localhost" ? new ethers.providers.JsonRpcProvider() : new ethers.providers.getDefaultProvider(process.env.NETWORK);
        const signer = new ethers.Wallet(process.env.WALLET_KEY, provider);
        this.contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi).connect(signer);
    }

    isClaimed(claimCode) {
        return this.contract.claimed(claimCode);
    }

    async claim(claimerAddress, claimCode) {
        const tx = await this.contract.mint(claimerAddress, claimCode)
        return tx.wait();
    }
}

module.exports = Contract;