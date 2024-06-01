import Toko from "../Models/TokoModels.js";

export const getToko = async (req, res) => {
    try {
        const response = await Toko.findAll();
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg : "Data tidak di temukan"})
        
    }
}
export const getTokobtId = async (req, res) => {
    try {
        const response = await Toko.findAll({
            where : {
                id_stok : req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg : "Data tidak di temukan"})
        
    }
}

export const createToko = async(req, res) => {
    const {nama_barang, jumlah} = req.body;
    try {
        await Toko.create({
            nama_barang : nama_barang,
            jumlah : jumlah
        })
        res.status(200).json({msg : "Data berhasil di buat"} )
    } catch (error) {
        res.status(500).json({msg : error} )
        console.log(nama_barang, jumlah);
    }
}

export const deleteToko = async(req, res) => {
    try {
        const toko = await Toko.findOne({
            where : {
                id_stok : req.params.id
            }
        })

        if(!toko) {

            res.status(404).json({msg : "Id salah"} )
        }
        await toko.destroy()
        res.status(200).json({msg : "Data berhasil di Hapus"} )
        
        
    } catch (error) {
        res.status(500).json({msg : "Data Gagal di Hapus"} )
        
    }
}