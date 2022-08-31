import handler from "../../../../../pages/api/code/[code]/is_claimed";
import { createMocks } from "node-mocks-http";
import CodeRepository from "../../../../../lib/code_repository";
import Contract from "../../../../../lib/contract";

jest.mock("../../../../../lib/contract");
jest.mock("../../../../../lib/code_repository");

describe("is_claimed API endpoint", () => {
    it("should 404 on POSTs", async () => {
        const { req, res } = createMocks({
            method: "POST",
        });

        await handler(req, res);

        expect(res._getStatusCode()).toEqual(404);
    });

    it("should return true if pass_code is invalid", async () => {
        process.env.PASS_CODE = "test";

        const isValidSpy = jest.spyOn(CodeRepository.prototype, "isValid").mockResolvedValue(false);

        const code = "12345";
        const { req, res } = createMocks({
            method: "GET",
            query: {
                code,
                pass_code: "invalid",
            },
        });

        await handler(req, res);

        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                claimed: true,
            }),
        );
    });

    it("should return true if code is invalid", async () => {
        process.env.PASS_CODE = "test";

        const isValidSpy = jest.spyOn(CodeRepository.prototype, "isValid").mockResolvedValue(false);

        const code = "12345";
        const { req, res } = createMocks({
            method: "GET",
            query: {
                code,
                pass_code: process.env.PASS_CODE,
            },
        });

        await handler(req, res);

        expect(isValidSpy).toHaveBeenCalledWith(code);
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                claimed: true,
            }),
        );
    });

    it("should return true if pass_code is not passed", async () => {
        process.env.PASS_CODE = "test";

        const code = "12345";
        const { req, res } = createMocks({
            method: "GET",
            query: {
                code,
            },
        });

        await handler(req, res);

        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                claimed: true,
            }),
        );
    });

    it("should return true if contract returns code as claimed", async () => {
        process.env.PASS_CODE = "test";

        jest.spyOn(CodeRepository.prototype, "isValid").mockResolvedValue(true);
        const isClaimedSpy = jest.spyOn(Contract.prototype, "isClaimed").mockResolvedValue(true);

        const code = "12345";
        const { req, res } = createMocks({
            method: "GET",
            query: {
                code,
                pass_code: process.env.PASS_CODE,
            },
        });

        await handler(req, res);

        expect(isClaimedSpy).toHaveBeenCalledWith(code);
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                claimed: true,
            }),
        );
    });

    it("should return false if code is valid and has not been claimed", async () => {
        process.env.PASS_CODE = "test";

        jest.spyOn(CodeRepository.prototype, "isValid").mockResolvedValue(true);
        jest.spyOn(Contract.prototype, "isClaimed").mockResolvedValue(false);

        const code = "12345";
        const { req, res } = createMocks({
            method: "GET",
            query: {
                code,
                pass_code: process.env.PASS_CODE,
            },
        });

        await handler(req, res);

        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                claimed: false,
            }),
        );
    });
});