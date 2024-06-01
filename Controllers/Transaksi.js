import Transaksi from "../Models/TransaksiModels.js";

export const getTransaksi = async(req, res) => {
    try {
        const response = await Transaksi.findAll()
        
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg : "Data Tidak ditemukan"} )
           
    }
}

export const getTransaksiByid = async(req, res) => {
    try {
        const response = await Transaksi.findOne({
            where : {
                id_transaksi : req.params.id
            }
        })
        
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg : "Data Tidak ditemukan"} )
        
    }
}

export const createTransaksi = async(req, res) => {
    const {nama_barang, jumlah} = req.body;
    try {
        await Transaksi.create({
            nama_barang : nama_barang,
            jumlah : jumlah
        })
        res.status(200).json({msg : "Data berhasil di buat"} )
    } catch (error) {
        res.status(500).json({msg : error} )
        console.log(nama_barang, jumlah);
    }
}

export const deleteTransaksi = async(req, res) => {
    try {
        const transaksi = await Transaksi.findOne({
            where : {
                id_transaksi : req.params.id
            }
        })

        if(!transaksi) {

            res.status(404).json({msg : "Id salah"} )
        }
        await transaksi.destroy()
        res.status(200).json({msg : "Data berhasil di Hapus"} )
        
        
    } catch (error) {
        res.status(500).json({msg : "Data Gagal di Hapus"} )
        
    }
}
