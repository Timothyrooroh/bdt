import db from "../Config/Database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Toko = db.define(
  "toko",
  {
    id_stok: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_barang: {
      type: DataTypes.STRING,
     
    },
    jumlah: {
      type: DataTypes.INTEGER,
     
    },
  },
  {
    freezeTableName: true,
  }
);

export default Toko