import { useCodeRepository } from "../../lib/code_repository";
import * as faunaDB from "../../lib/fauna";

const mock = jest.spyOn(faunaDB, "getFauna").mockImplementation();

describe.only("CodeRepository", () => {
  beforeAll(() => {
    process.env.FAUNADB_SECRET = "fake";
  });

  it.only("should initialize faunadb client with the secret from env", async () => {
    const { isValid } = useCodeRepository();
    await isValid("test");
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith({
      secret: process.env.FAUNADB_SECRET,
      domain: "db.us.fauna.com",
      scheme: "https",
    });
  });

  // describe("isValid", () => {
  //   it("should return true if code can be found in fauna", async () => {
  //     faunadb.Client.mockReturnValue({
  //       query: jest.fn().mockResolvedValue(true),
  //     });

  //     const repository = new CodeRepository();
  //     expect(await repository.isValid("123456")).toBeTruthy();
  //   });

  //   it("should return false if code can't be found in fauna", async () => {
  //     faunadb.Client.mockReturnValue({
  //       query: jest.fn().mockResolvedValue(false),
  //     });

  //     const repository = new CodeRepository();
  //     expect(await repository.isValid("123456")).toBeFalsy();
  //   });
  // });
});
