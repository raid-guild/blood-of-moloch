import ethers, { providers, Contract, Wallet } from "ethers";

type ClaimProps = {
  account: string;
  code: string;
};
const usePodContract = () => {
  let provider: providers.BaseProvider;
  let account: Wallet;

  //TODO check on supported contracts
  const init = async (address: string) => {
    const abi = new ethers.utils.Interface([
      "function mint(address to, string memory claimCode) external",
      "function claimed(string memory claimCode) external view returns (bool)",
    ]);

    let network = process.env.NETWORK;

    switch (network) {
      case "localhost":
        provider = new ethers.providers.JsonRpcProvider();
        break;

      case "gnosis": {
        provider = new ethers.providers.JsonRpcProvider(
          process.env.GNOSIS_RPC_URL
        );
        account = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
        console.log(account.address);
        break;
      }

      default:
        provider = ethers.providers.getDefaultProvider(process.env.NETWORK);
        break;
    }

    const signer = account.connect(provider);

    return new ethers.Contract(address, abi, signer);
  };

  //TODO functions might be redundant
  const isClaimed = async (contract: Contract, claimCode: string) => {
    return contract.claimed(claimCode);
  };

  const claim = async (contract: Contract, { account, code }: ClaimProps) => {
    const tx = await contract.mint(account, code);
    return await tx.wait();
  };

  return { provider, account, init, isClaimed, claim };
};

export { usePodContract };
