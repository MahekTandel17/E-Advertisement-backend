const routes = require('express').Router();
const hordingController = require('../controllers/HordingController');
routes.post('/add', hordingController.addHording);
routes.get('/getall', hordingController.getAllHordings);
module.exports = routes;