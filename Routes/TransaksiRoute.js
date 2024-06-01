import { getTransaksi, getTransaksiByid, createTransaksi, deleteTransaksi } from "../Controllers/Transaksi.js";

import express from "express"

const router = express.Router();

router.get("/transaksi", getTransaksi);
router.get("/transaksi/:id", getTransaksiByid);
router.post("/transaksi", createTransaksi);
router.delete("/transaksi/:id", deleteTransaksi);

export default router
