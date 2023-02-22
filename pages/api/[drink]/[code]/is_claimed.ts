import { useCodeRepository } from "../../../../lib/code_repository";
import { usePodContract } from "../../../../lib/contract";
import PODcontracts from "../../contracts.json";

export type DrinkDbData = {
  drink: string;
  code: string;
};

const IsClaimedHandler = async (req, res) => {
  const { isValid } = useCodeRepository();
  const { init, isClaimed } = usePodContract();
  if (req.method === "GET") {
    const returnClaimed = (claimed: boolean) => {
      return res.status(200).json({ claimed });
    };

    const { drink, code }: DrinkDbData = req.query;

    const foundCode = await isValid({ code, drink });
    if (!foundCode) {
      return returnClaimed(true);
    }

    //TODO hacky network selection
    const network = process.env.NODE_ENV == "production" ? "gnosis" : "goerli";

    const contractAddress = PODcontracts[network][drink];

    if (!contractAddress) {
      return res.status(400).json({ error: "No contract found" });
    }

    const podContract = await init(contractAddress);
    const claimed = await isClaimed(podContract, code);
    if (claimed) {
      return returnClaimed(true);
    }

    return returnClaimed(false);
  }

  return res.status(404);
};

export default IsClaimedHandler;
