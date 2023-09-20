
const express = require("express")
const router = express.Router()
const loginRegisterController = require("../controllers/loginRegisterController")
const JuryController = require("../controllers/JuryController")
const StartupContoller = require ("../controllers/StartupController")
const TrainerController = require("../controllers/TrainerController")


//--------------------login Routes-----------------

router.post("/users/login",loginRegisterController.login);


//-------------------Data Routes--------------------

router.get("/jury/getAllJuries", JuryController.getAllJuries)
router.get("/jury/getJury", JuryController.getJury)
router.post("/jury/createJury",JuryController.createJury)
router.put("/jury/updateJury",JuryController.updateJury)
router.delete("/jury/deleteJury",JuryController.deleteJury)



//----------startups------
router.get("/startup/getAllStart",StartupContoller.getAllStartups )
router.get("/startup/getStartup/:id",StartupContoller.getStartup)
router.put("/startup/updateStarup/:id", StartupContoller.updateStartup)
router.delete("/startup/deleteStartup/:id", StartupContoller.deleteStartup)



//-----------------trainers----------
router.get("/trainers/getAllTrainers", TrainerController.getAllTrainers)
router.get("/trainers/getTrainer/:id", TrainerController.getTrainer)
router.put("/trainers/updateTrainer/:id", TrainerController.updateTrainer)
router.delete("/trainers/deleteTrainer/:id",TrainerController.deleteTrainer)


module.exports = router