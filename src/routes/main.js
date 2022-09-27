const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

//controller
const mainController = require("../controllers/mainController");

//middleware
const adminMiddleware = require('../middlewares/adminMiddleware')


//router.get()
router.get('/', mainController.index);

router.get('/admin',adminMiddleware ,adminController.admin);

module.exports = router;
