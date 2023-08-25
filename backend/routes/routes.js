
const express = require("express")
const router = express.Router()
const controller = require("../controllers/Controller")
const loginRegisterController = require("../controllers/loginRegisterController")

router.get("/getdata", controller.getData);

//route to login
router.post("/login",loginRegisterController.login);


module.exports = router