import Gudang from "../Models/GudangModel.js";

export const getGudang = async (req, res) => {
    try {
        const response = await Gudang.findAll();
        res.status(200).json(response )
    } catch (error) {
        res.status(404).json({msg : "Data Tidak ditemukan"} )
    }
}
export const getGudangById = async (req, res) => {
    try {
        const response = await Gudang.findAll({
            where : {
                id_barang : req.params.id
            }
        });
        res.status(200).json(response )
    } catch (error) {
        res.status(404).json({msg : "Data Tidak ditemukan"} )
    }
}

export const createGudang = async(req, res) => {
    const {nama_barang, jumlah} = req.body;
    try {
        await Gudang.create({
            nama_barang : nama_barang,
            jumlah : jumlah
        })
        res.status(200).json({msg : "Data berhasil di buat"} )
    } catch (error) {
        res.status(500).json({msg : error} )
        console.log(nama_barang, jumlah);
    }
}

export const deleteGudang = async(req, res)=> {
    try {
        const gudang = await Gudang.findOne({
            where : {
                id_barang : req.params.id
            }
        })

        if(!gudang) {

            res.status(404).json({msg : "Id salah"} )
        }
        await gudang.destroy()
        res.status(200).json({msg : "Data berhasil di Hapus"} )
        
        
    } catch (error) {
        res.status(500).json({msg : "Data Gagal di Hapus"} )
        
    }
}