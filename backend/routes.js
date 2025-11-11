import express from "express"
const router = express.Router()
import { descriptionController } from "./controller.js"
//Códigos

router.get("/products", descriptionController)

export default router