import { useCodeRepository } from "../../../../lib/code_repository";
import { usePodContract } from "../../../../lib/contract";

const IsClaimedHandler = async (req, res) => {
  const { isValid } = useCodeRepository();
  const { init, isClaimed } = usePodContract();
  if (req.method === "GET") {
    const returnClaimed = (claimed: boolean) => {
      return res.status(200).json({ claimed });
    };

    const { code } = req.query;

    const foundCode = await isValid(code);
    if (!foundCode) {
      return returnClaimed(true);
    }

    await init();
    const claimed = await isClaimed(code);
    if (claimed) {
      return returnClaimed(true);
    }

    return returnClaimed(false);
  }

  return res.status(404);
};

export default IsClaimedHandler;
