const routes = require("express").Router()
const stateController= require("../controllers/StateController")
routes.get("/getall",stateController.getAllStates)
routes.post("/add",stateController.addState)
routes.delete("/deletebyid/:id",stateController.deleteState)
routes.get("/getbyid/:id",stateController.getStateById)


module.exports = routes