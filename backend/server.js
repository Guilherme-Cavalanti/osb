import express from "express"
import cors from "cors"
import router from "./routes.js"

const app = express()
app.use(cors())

app.use(express.json())

app.use("/api",router)
const online = () => {
    console.log("Server online na porta 3000")
}

app.listen(3000,online)