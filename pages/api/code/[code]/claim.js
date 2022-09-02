import CodeRepository from "../../../../lib/code_repository";
import Contract from "../../../../lib/contract";

const repository = new CodeRepository();
const contract = new Contract();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const pass_code = process.env.PASS_CODE;

        const { code } = req.query;
        const { address } = JSON.parse(req.body);


        if (!pass_code || pass_code !== process.env.PASS_CODE) {
            return res.status(400).json({ error: "Code cannot be confirmed." });
        }
    
        const foundCode = await repository.isValid(code);
        if (!foundCode) {
            return res.status(400).json({ error: "Code has already been claimed." });
        }
        // console.log("contract", contract)
        await contract.init();
        try {
            const tx = await contract.claim(address, code);
            console.log("tx", tx)
            const receipt = await tx.wait();
            return res.status(200).json(receipt);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    return res.status(404);
}
