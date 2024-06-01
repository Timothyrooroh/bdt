import { createToko, deleteToko, getToko, getTokobtId } from "../Controllers/Toko.js";
import express from "express"

const router = express.Router();

router.get("/toko", getToko);
router.get("/toko/:id", getTokobtId);
router.post("/toko", createToko);
router.delete("/toko/:id", deleteToko);

export default router