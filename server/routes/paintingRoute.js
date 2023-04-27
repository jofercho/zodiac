const express = require('express');;

const router = express.Router();
const paintingController = require('../controllers/paintingController');

router.get('/paintings', paintingController.getPaintings);

module.exports = router;