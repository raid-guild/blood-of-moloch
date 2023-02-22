import IsClaimedHandler from "../../../../../pages/api/[drink]/[code]/is_claimed";
import { createMocks } from "node-mocks-http";

import { useCodeRepository } from "../../../../../lib/code_repository";
import { usePodContract } from "../../../../../lib/contract";

describe("is_claimed API endpoint", () => {
  it("should 404 on POSTs", async () => {
    const { req, res } = createMocks({
      method: "POST",
    });

    await IsClaimedHandler(req, res);

    expect(await IsClaimedHandler(req, res)).toEqual(
      expect.objectContaining({ statusCode: 404 })
    );
  });

  //   it("should return true if code is invalid", async () => {
  //     const isValidSpy = jest
  //       .spyOn(CodeRepository.prototype, "isValid")
  //       .mockResolvedValue(false);

  //     const code = "12345";
  //     const { req, res } = createMocks({
  //       method: "GET",
  //       query: {
  //         code,
  //       },
  //     });

  //     await handler(req, res);

  //     expect(isValidSpy).toHaveBeenCalledWith(code);
  //     expect(JSON.parse(res._getData())).toEqual(
  //       expect.objectContaining({
  //         claimed: true,
  //       })
  //     );
  //   });

  //   it("should return true if contract returns code as claimed", async () => {
  //     jest.spyOn(CodeRepository.prototype, "isValid").mockResolvedValue(true);
  //     const isClaimedSpy = jest
  //       .spyOn(Contract.prototype, "isClaimed")
  //       .mockResolvedValue(true);

  //     const code = "12345";
  //     const { req, res } = createMocks({
  //       method: "GET",
  //       query: {
  //         code,
  //       },
  //     });

  //     await handler(req, res);

  //     expect(isClaimedSpy).toHaveBeenCalledWith(code);
  //     expect(JSON.parse(res._getData())).toEqual(
  //       expect.objectContaining({
  //         claimed: true,
  //       })
  //     );
  //   });

  //   it("should return false if code is valid and has not been claimed", async () => {
  //     jest.spyOn(CodeRepository.prototype, "isValid").mockResolvedValue(true);
  //     jest.spyOn(Contract.prototype, "isClaimed").mockResolvedValue(false);

  //     const code = "12345";
  //     const { req, res } = createMocks({
  //       method: "GET",
  //       query: {
  //         code,
  //         pass_code: process.env.PASS_CODE,
  //       },
  //     });

  //     await handler(req, res);

  //     expect(JSON.parse(res._getData())).toEqual(
  //       expect.objectContaining({
  //         claimed: false,
  //       })
  //     );
  //   });
});
