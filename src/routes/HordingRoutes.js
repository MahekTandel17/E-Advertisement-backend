const routes = require('express').Router();
const hordingController = require('../controllers/HordingController');
routes.post('/hording', hordingController.addHording);
routes.get('/hordings', hordingController.getAllHordings);
module.exports = routes;