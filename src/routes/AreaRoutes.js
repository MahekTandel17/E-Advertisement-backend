const routes = require("express").Router()
const areaController= require("../controllers/AreaController")
routes.get("/areas",areaController.getAllAreas)
routes.post("/area",areaController.addArea)
routes.delete("/area/:id",areaController.deleteArea)
routes.get("/area/:id",areaController.getAreaById)


module.exports = routes