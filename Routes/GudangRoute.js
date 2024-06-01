import { createGudang, deleteGudang, getGudang, getGudangById } from "../Controllers/Gudang.js";
import express from "express"

const router = express.Router();

router.get("/gudang", getGudang);
router.get("/gudang/:id", getGudangById);
router.post("/gudang", createGudang);
router.delete("/gudang/:id", deleteGudang);

export default router
