import { useCodeRepository } from "../../../../lib/code_repository";
import { ethers } from "ethers";
import { usePodContract } from "../../../../lib/contract";

const ClaimHandler = async ({ req, res }) => {
  const { isValid } = useCodeRepository();
  const { init, claim } = usePodContract();

  if (req.method === "POST") {
    try {
      const { code } = req.query;
      let { address, password } = JSON.parse(req.body);

      if (!password || password !== process.env.PASSWORD) {
        return res.status(400).json({ error: "Code cannot be confirmed." });
      }

      const foundCode = await isValid(code);
      if (!foundCode) {
        return res
          .status(400)
          .json({ error: "Code has already been claimed." });
      }

      await init();

      const ensProvider = ethers.providers.getDefaultProvider("homestead", {
        alchemy:
          "https://eth-mainnet.g.alchemy.com/v2/O7HNhorzCs5RCiGYizhOr1U8Uzy7xjMi",
      });

      let parsedAddress: string;
      if (address.substring(address.length - 4, address.length) == ".eth") {
        parsedAddress = await ensProvider.resolveName(address);
      } else {
        parsedAddress = address;
      }

      const receipt = await claim({ account: parsedAddress, code });
      return res.status(200).json(receipt);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  return res.status(404);
};

export default ClaimHandler;
