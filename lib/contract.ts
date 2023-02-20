import ethers, { providers, Contract, Wallet } from "ethers";
import PODcontracts from "./POD-contracts.json";

type ClaimProps = {
  account: string;
  code: string;
};
const usePodContract = () => {
  let provider: providers.BaseProvider;
  let contract: Contract;
  let account: Wallet;

  const init = async () => {
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

    contract = new ethers.Contract(PODcontracts[network], abi, signer);
  };

  const isClaimed = async (claimCode: string) => {
    return contract.claimed(claimCode);
  };

  const claim = async ({ account, code }: ClaimProps) => {
    const tx = await contract.mint(account, code);
    return await tx.wait();
  };

  return { provider, contract, account, init, isClaimed, claim };
};

export { usePodContract };
