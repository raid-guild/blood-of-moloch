import handler from "../../../../../pages/api/code/[code]/claim";
import { createMocks } from "node-mocks-http";
import CodeRepository from "../../../../../lib/code_repository";
import Contract from "../../../../../lib/contract";

jest.mock("../../../../../lib/contract");
jest.mock("../../../../../lib/code_repository");

describe("claim API endpoint", () => {
    it("should 404 on GETs", async () => {
        const { req, res } = createMocks({
            method: "GET",
        });

        await handler(req, res);

        expect(res._getStatusCode()).toEqual(404);
    });

    it("should return error 400 if code is invalid", async () => {
        const isValidSpy = jest.spyOn(CodeRepository.prototype, "isValid").mockResolvedValue(false);

        const code = "12345";
        const address = "XYZ";

        const { req, res } = createMocks({
            method: "POST",
            query: {
                code,
            },
            body: {
                address,
            },
        });

        await handler(req, res);

        expect(isValidSpy).toHaveBeenCalledWith(code);
        expect(res._getStatusCode()).toEqual(400);
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                error: "Code has already been claimed.",
            }),
        );
    });

    it("should return success if claiming works", async () => {
        jest.spyOn(CodeRepository.prototype, "isValid").mockResolvedValue(true);
        const claimSpy = jest.spyOn(Contract.prototype, "claim").mockResolvedValue({
            wait: jest.fn().mockResolvedValue({ tx: "test" }),
        });

        const code = "12345";
        const address = "XYZ";

        const { req, res } = createMocks({
            method: "POST",
            query: {
                code,
            },
            body: {
                address,
            },
        });

        await handler(req, res);

        expect(claimSpy).toHaveBeenCalledWith(address, code);
        expect(res._getStatusCode()).toEqual(200);
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                tx: "test",
            }),
        );
    });

    it("should return claim error if it doesn't work", async () => {
        jest.spyOn(CodeRepository.prototype, "isValid").mockResolvedValue(true);
        const claimSpy = jest.spyOn(Contract.prototype, "claim").mockImplementation(() => {
            throw new Error("This is the error message.");
        });

        const code = "12345";
        const address = "XYZ";

        const { req, res } = createMocks({
            method: "POST",
            query: {
                code,
            },
            body: {
                address,
            },
        });

        await handler(req, res);

        expect(claimSpy).toHaveBeenCalledWith(address, code);
        expect(res._getStatusCode()).toEqual(400);
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                error: "This is the error message.",
            }),
        );
    });
});