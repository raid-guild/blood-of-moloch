import CodeRepository from "../../../../lib/code_repository";
import Contract from "../../../../lib/contract";
import ethers from "ethers";

const repository = new CodeRepository();
const contract = new Contract();

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const { code } = req.query;
        const { address, password } = JSON.parse(req.body);
        if (!password || password !== process.env.PASSWORD) {
            return res.status(400).json({ error: "Code cannot be confirmed." });
        }

        const foundCode = await repository.isValid(code);
        if (!foundCode) {
            return res.status(400).json({ error: "Code has already been claimed." });
        }

        await contract.init();
        
        try {

            const receipt = await contract.claim(address, code);
            console.log("tx.status", receipt.status)
            return res.status(200).json(receipt);
        } catch (err) {
            console.error(err);
            return res.status(400).json({ error: err.message });
        }
    }

    return res.status(404);
}
