const routes = require("express").Router()
const cityController= require("../controllers/CityController")
routes.get("/getall",cityController.getAllCities)
routes.post("/add",cityController.addCity)
routes.get("/getcitybystate/:stateId",cityController.getCityByStateId)


module.exports = routes