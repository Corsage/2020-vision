const express = require('express');
const router = express.Router();

// setup controllers- store functionality for passed calls 
const adminController = require('../controllers/adminController.js');

// testing route
router.get('/test', adminController.test);

// exports module 
module.exports = router; 