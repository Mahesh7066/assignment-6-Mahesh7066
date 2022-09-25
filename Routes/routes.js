const express = require('express');
const restaurantController = require('../controllers/Reataurants');

const router = express.Router();

router.post('/filterRestaurants', restaurantController.filterRestaurants);

module.exports = router;    