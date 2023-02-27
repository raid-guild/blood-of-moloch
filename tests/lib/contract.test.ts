import { ethers, providers, Contract, Wallet } from "ethers";
import { usePodContract } from "../../lib/contract";

describe("Contract", () => {
  const { init } = usePodContract();
  const defaultContract = "0x018A869ee8Ba15002d0B025eeb3c776142091f97";
  const randomWallet = ethers.Wallet.createRandom();
  process.env.PRIVATE_KEY = randomWallet.privateKey;
  process.env.GNOSIS_RPC_URL = "https://rpc.ankr.com/gnosis";

  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should only initialize a provider for a supported network", async () => {
    expect(init(defaultContract)).rejects.toThrow();

    process.env.NEXT_PUBLIC_NETWORK = "localhost";
    expect(init(defaultContract)).rejects.toThrow();

    process.env.NEXT_PUBLIC_NETWORK = "gnosis";
    process.env.RPC_URL = "https://gnosis.rpc";

    expect(await (await init(defaultContract)).provider._isProvider).toBe(true);
  });

  it("should create a wallet with the correct key", async () => {
    process.env.NEXT_PUBLIC_NETWORK = "gnosis";
    const contract = await init(defaultContract);
    expect(await contract.signer.getAddress()).toBe(randomWallet.address);
  });
});
