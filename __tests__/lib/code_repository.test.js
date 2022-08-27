const faunadb = require("faunadb");
const CodeRepository = require("../../lib/code_repository");

jest.mock("faunadb");

describe("CodeRepository", () => {
    beforeAll(() => {
        process.env.FAUNADB_SECRET = "fake";
    });

    beforeEach(() => {
        faunadb.Client.mockClear();
    });

    it("should initialize faunadb client with the secret from env", () => {
        new CodeRepository();
        expect(faunadb.Client).toHaveBeenCalledTimes(1);
        expect(faunadb.Client).toHaveBeenCalledWith({ secret: process.env.FAUNADB_SECRET, domain: "db.us.fauna.com" });
    });

    describe("isValid", () => {
        it("should return true if code can be found in fauna", async () => {
            faunadb.Client.mockReturnValue({
                query: jest.fn().mockResolvedValue(true),
            });

            const repository = new CodeRepository();
            expect(await repository.isValid("123456")).toBeTruthy();
        });

        it("should return false if code can't be found in fauna", async () => {
            faunadb.Client.mockReturnValue({
                query: jest.fn().mockResolvedValue(false),
            });

            const repository = new CodeRepository();
            expect(await repository.isValid("123456")).toBeFalsy();
        })
    });
});