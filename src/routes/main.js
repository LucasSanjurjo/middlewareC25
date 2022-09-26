const express = require("express");
const router = express.Router();

//controller
const mainController = require("../controllers/mainController");
//middleware


//router.get()
router.get("/", mainController.index);
//definimos rutas de test(BORRAMOS LUEGO)
router.get("/milanesa", mainController.index);
router.get("/login", mainController.index);

module.exports = router;
