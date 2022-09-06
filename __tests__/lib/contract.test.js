const ethers = require("ethers");
import { RelayProvider } from "@opengsn/provider/dist/RelayProvider";
const Contract = require("../../lib/Contract");

jest.mock("ethers");
jest.mock("@opengsn/provider/dist/RelayProvider");

describe("Contract", () => {
    const env = process.env;

    beforeEach(() => {
        jest.resetModules();
        process.env = { ...env };
        ethers.Contract.mockClear();
    });

    afterEach(() => {
        jest.clearAllMocks();
        process.env = env;
    })

    it("should initialize a provider with the JsonRpcProvider for localhost", async () => {
        process.env.NETWORK = "localhost";
        const contract = new Contract();
        await contract.init();
        expect(ethers.providers.JsonRpcProvider).toHaveBeenCalledTimes(1);
    });

    it("should initialize a provider with the JsonRpcProvider for gnosis", async () => {
        jest.spyOn(RelayProvider, "newProvider").mockReturnValue({
            init: () => jest.fn(),
        });
        process.env.NETWORK = "gnosis";
        process.env.GNOSIS_RPC_URL = "https://rpc.ankr.com/gnosis";
        const contract = new Contract();
        await contract.init();
        expect(ethers.providers.JsonRpcProvider).toHaveBeenCalledTimes(1);
        expect(ethers.providers.JsonRpcProvider).toHaveBeenCalledWith("https://rpc.ankr.com/gnosis");
    });

    it("should initialize a provider with the defaultProvider for anything but localhost or gnosis", async () => {
        process.env.NETWORK = "rinkeby";
        const contract = new Contract();
        await contract.init();
        expect(ethers.providers.getDefaultProvider).toHaveBeenCalledTimes(1);
        expect(ethers.providers.getDefaultProvider).toHaveBeenCalledWith(process.env.NETWORK);
    });

    it("should initialize a contract with the correct address", async () => {
        const contract = new Contract();
        await contract.init();
        expect(ethers.Contract).toHaveBeenCalledTimes(1);
        expect(ethers.Contract).toHaveBeenCalledWith(process.env.CONTRACT_ADDRESS, expect.any(ethers.utils.Interface));
    });

    it("should create a wallet with the correct key", async () => {
        process.env.NETWORK = "gnosis";
        process.env.WALLET_KEY = "fake-key";
        const contract = new Contract();
        await contract.init();
        expect(ethers.Wallet).toHaveBeenCalledTimes(1);
        expect(ethers.Wallet).toHaveBeenCalledWith(process.env.WALLET_KEY, expect.any(Object));
    });
});