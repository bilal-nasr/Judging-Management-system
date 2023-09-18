
const express = require("express")
const router = express.Router()
const loginRegisterController = require("../controllers/loginRegisterController")
const JuryController = require("../controllers/JuryController")


//--------------------login Routes-----------------

router.post("/users/login",loginRegisterController.login);


//-------------------Data Routes--------------------

router.get("/jury/getAllJuries", JuryController.getAllJuries);


module.exports = router