import getcsv from "./data.js";
import { getGeminiDescription } from "./gemini.js";

const data = await getcsv()
export async function descriptionController(req, res) {
    try {
        for (const product of data) {
            try {
                const description = await getGeminiDescription(product.name, product.category)
                product.marketing_description = description
            } catch (error) {
                console.log("Erro em " + product.name)
            }
        }
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({
            error: "Erro interno ao gerar descrições"
        });
    }
}
