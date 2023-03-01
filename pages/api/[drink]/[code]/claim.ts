import { useCodeRepository } from "../../../../lib/code_repository";
import { ethers } from "ethers";
import { usePodContract } from "../../../../lib/contract";
import PODcontracts from "../../contracts.json";

export type ClaimData = {
  drink: string;
  address: string;
};

//TODO handling successful minting
const ClaimHandler = async (req, res) => {
  const { isValid } = useCodeRepository();
  const { init } = usePodContract();

  if (req.method === "POST") {
    try {
      const { code } = req.query;
      let { address: account, drink }: ClaimData = JSON.parse(req.body);

      const foundCode = await isValid({ code, drink });
      if (!foundCode) {
        return res.status(200).json({ error: "Code cannot be validated." });
      }

      const network = process.env.NEXT_PUBLIC_NETWORK;

      const contractAddress = PODcontracts[network][drink];

      if (!contractAddress) {
        return res.status(200).json({ error: "No contract found" });
      }

      console.log(`Contract address: ${contractAddress}`);

      const podContract = init(contractAddress);

      console.log(
        `Verifying claim for ${code} at ${contractAddress} on ${network}`
      );

      const codeClaimed = await podContract.claimed(code);

      console.log(`Verify response: ${codeClaimed}`);

      if (codeClaimed) {
        return res.status(200).json({ error: "Code already claimed." });
      }

      // const ensProvider = ethers.providers.getDefaultProvider("homestead", {
      //   alchemy:
      //     "https://eth-mainnet.g.alchemy.com/v2/O7HNhorzCs5RCiGYizhOr1U8Uzy7xjMi",
      // });

      const ensProvider = new ethers.providers.AlchemyProvider(
        "homestead",
        "O7HNhorzCs5RCiGYizhOr1U8Uzy7xjMi"
      );

      console.log("ensProvider", ensProvider);

      let parsedAddress: string;
      if (account.substring(account.length - 4, account.length) == ".eth") {
        parsedAddress = await ensProvider.resolveName(account);
      } else {
        parsedAddress = account;
      }

      console.log(`Minting for ${code} to ${account}`);

      const tx = await podContract.mint(account, code);
      const receipt = tx.wait();
      // return res.status(200).json(receipt);
      return res.status(200).json({ status: 1 });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  return res.status(404).json({ error: "Page not found" });
};

export default ClaimHandler;
