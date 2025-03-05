const stateModel = require("../models/StateModel")
const getAllStates = async (req,res)=>{
    const states = await stateModel.find()

    res.json({
        message: "State fetches successfully",
        data: states
    });
};

const addState = async (req,res)=>{
    const savedState = await stateModel.create(req.body)
    res.json({
        message:"State Created....",
        data: savedState
    })
}

const deleteState = async(req,res)=>{

    const deletedState = await stateModel.findByIdAndDelete(req.params.id)
    res.json({
        message: "State Deleted Successfully....",
        data: deletedState
    })
}

const getStateById = async(req,res)=>{

    const foundState = await stateModel.findById(req.params.id)
    res.json({
        message: "State Fatched....",
        data:foundState
    })
}


//object export 
module.exports = {
    getAllStates,addState,deleteState,getStateById
}