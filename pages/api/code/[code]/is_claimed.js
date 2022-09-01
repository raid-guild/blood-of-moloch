import CodeRepository from "../../../../lib/code_repository";
import Contract from "../../../../lib/contract";

const repository = new CodeRepository();
const contract = new Contract();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const returnClaimed = (claimed) => {
            return res.status(200).json({ claimed });
        };

        const { code } = req.query;

        const foundCode = await repository.isValid(code);
        if (!foundCode) {
            return returnClaimed(true);
        }

        const claimed = await contract.isClaimed(code);
        if (claimed) {
            return returnClaimed(true);
        }

        return returnClaimed(false);
    }

    return res.status(404);
}
