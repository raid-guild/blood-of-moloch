import { ethers, providers, Contract, Wallet } from "ethers";
import { Interface } from "ethers/lib/utils";

type ClaimProps = {
  account: string;
  code: string;
};
const usePodContract = () => {
  let provider: providers.BaseProvider;
  let account: Wallet;
  const abi: Interface = new ethers.utils.Interface([
    "function mint(address to, string memory claimCode) external",
    "function claimed(string memory claimCode) external view returns (bool)",
  ]);

  //TODO check on supported contracts and network
  const init = async (address: string) => {
    let network = process.env.NETWORK;
    if (!["gnosis", "goerli"].includes(network)) {
      throw Error("No supported network found in env vars");
    }
    provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    account = new Wallet(process.env.PRIVATE_KEY, provider);

    return new ethers.Contract(address, abi, account);
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
