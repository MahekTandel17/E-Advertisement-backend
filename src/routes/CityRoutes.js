const routes = require("express").Router()
const cityController= require("../controllers/CityController")
routes.get("/getall",cityController.getAllCities)
routes.post("/add",cityController.addCity)
routes.delete("/deletebyid/:id",cityController.deleteCity)
routes.get("/getbyid/:id",cityController.getCityById)


module.exports = routes