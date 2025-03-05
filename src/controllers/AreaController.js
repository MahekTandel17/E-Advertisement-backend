const areaModel = require("../models/AreaModel")
const getAllAreas = async (req,res)=>{
    const areas = await areaModel.find()

    res.json({
        message: "Area fetches successfully",
        data: areas
    });
};

const addArea = async (req,res)=>{
    const savedArea = await areaModel.create(req.body)
    res.json({
        message:"Area Created....",
        data: savedArea
    })
}

const deleteArea = async(req,res)=>{

    const deletedArea = await areaModel.findByIdAndDelete(req.params.id)
    res.json({
        message: "Area Deleted Successfully....",
        data: deletedArea
    })
}

const getAreaById = async(req,res)=>{

    const foundArea = await areaModel.findById(req.params.id)
    res.json({
        message: "Area Fatched....",
        data:foundArea
    })
}


//object export 
module.exports = {
    getAllAreas,addArea,deleteArea,getAreaById
}