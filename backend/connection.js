
import { GoogleGenAI } from "@google/genai";
import { config } from 'dotenv';

config()

const genAI = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export async function startNewChat(model = 'gemini-2.5-flash') {
    const chat = genAI.chats.create({ model });
    try {
        const response = await chat.sendMessage({ message: `Responda apenas com "GeminiAI: Estamos conectados!` })
        console.log(response.text)
        return chat
    } catch (error) {
        console.log("Erro conectando com Gemini AI")
        console.log(`Erro: ${error.message}`)
        return null
    }
}
