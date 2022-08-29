const ethers = require("ethers");
const Contract = require("../../lib/Contract");

jest.mock("ethers");

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

    it("should initialize a provider with the JsonRpcProvider for localhost", () => {
        process.env.NETWORK = "localhost";
        new Contract();
        expect(ethers.providers.JsonRpcProvider).toHaveBeenCalledTimes(1);
    });

    it("should initialize a provider with the JsonRpcProvider for gnosis", () => {
        process.env.NETWORK = "gnosis";
        new Contract();
        expect(ethers.providers.JsonRpcProvider).toHaveBeenCalledTimes(1);
        expect(ethers.providers.JsonRpcProvider).toHaveBeenCalledWith("https://rpc.ankr.com/gnosis");
    });

    it("should initialize a provider with the defaultProvider for anything but localhost or gnosis", () => {
        process.env.NETWORK = "rinkeby";
        new Contract();
        expect(ethers.providers.getDefaultProvider).toHaveBeenCalledTimes(1);
        expect(ethers.providers.getDefaultProvider).toHaveBeenCalledWith(process.env.NETWORK);
    });

    it("should initialize a contract with the correct address", () => {
        new Contract();
        expect(ethers.Contract).toHaveBeenCalledTimes(1);
        expect(ethers.Contract).toHaveBeenCalledWith(process.env.CONTRACT_ADDRESS, expect.any(ethers.utils.Interface));
    });

    it("should create a wallet with the correct key", () => {
        process.env.NETWORK = "gnosis";
        process.env.WALLET_KEY = "fake-key";
        new Contract();
        expect(ethers.Wallet).toHaveBeenCalledTimes(1);
        expect(ethers.Wallet).toHaveBeenCalledWith(process.env.WALLET_KEY, expect.any(Object));
    });
});