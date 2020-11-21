const express = require('express');
const router = express.Router();

// setup controllers- store functionality for passed calls 
const admin_controller = require('../controllers/admin.controller.js');

// testing route
router.get('/test', admin_controller.test);

// exports module 
module.exports = router; 