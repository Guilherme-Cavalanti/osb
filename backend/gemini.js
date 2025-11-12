import { startNewChat } from "./connection.js";

const chat = await startNewChat()
export async function getGeminiDescription(nome, categoria) {
    try {
        const response = await chat.sendMessage({
            message:
                `Gere uma chamada de marketing curta e empolgante para um produto 
            chamado ${nome} da categoria ${categoria}. 1 ou duas frases apenas.
                Responda apenas com a chamada, em português.
            `
        })
        return response.text
    } catch (error) {
        console.log("Erro na descrição de " + nome)
        return null
    }
}

