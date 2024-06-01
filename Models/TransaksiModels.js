import db from "../Config/Database.js";
import { Sequelize } from "sequelize";

const {DataTypes} = Sequelize;

const Transaksi = db.define("transaksi", {
    id_transaksi : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    nama_barang : {
        type : DataTypes.STRING,
    },
    jumlah : {
        type : DataTypes.INTEGER,
       
    }
}, {
    freezeTableName : true,
})

export default Transaksi;