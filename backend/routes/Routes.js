
const express = require("express")
const router = express.Router()
const loginRegisterController = require("../controllers/loginRegisterController")
const JuryController = require("../controllers/JuryController")
const StartupContoller = require ("../controllers/StartupController")


//--------------------login Routes-----------------

router.post("/users/login",loginRegisterController.login);


//-------------------Data Routes--------------------

router.get("/jury/getAllJuries", JuryController.getAllJuries);

//----------startups------
router.get("/startup/getAllStart",StartupContoller.getAllStartups )
router.get("/startup/getstartup/:id",StartupContoller.getStartup)
router.put("/startup/updatestarup/:id", StartupContoller.updateStartup)


module.exports = router