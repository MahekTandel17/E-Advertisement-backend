const cityModel = require("../models/CityModel")
const getAllCities = async (req,res)=>{
    const cities = await cityModel.find()

    res.json({
        message: "City fetches successfully",
        data: cities
    });
};

const addCity = async (req,res)=>{
    const savedCity = await cityModel.create(req.body)
    res.json({
        message:"City Created....",
        data: savedCity
    })
}

const deleteCity = async(req,res)=>{

    const deletedCity = await cityModel.findByIdAndDelete(req.params.id)
    res.json({
        message: "City Deleted Successfully....",
        data: deletedCity
    })
}

const getCityById = async(req,res)=>{

    const foundCity = await cityModel.findById(req.params.id)
    res.json({
        message: "City Fatched....",
        data:foundCity
    })
}


//object export 
module.exports = {
    getAllCities,addCity,deleteCity,getCityById
}