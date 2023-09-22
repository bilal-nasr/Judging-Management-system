
const express = require("express")
const router = express.Router()
const loginRegisterController = require("../controllers/loginRegisterController")
const JuryController = require("../controllers/JuryController")
const StartupContoller = require ("../controllers/StartupController")
const TrainerController = require("../controllers/TrainerController")


//--------------------login Routes-----------------

router.post("/users/login",loginRegisterController.login);


//-------------------Data Routes-done with postman-------------------

router.get("/jury/getAllJuries", JuryController.getAllJuries)
router.get("/jury/getJury/:id", JuryController.getJury)
router.post("/jury/createJury",JuryController.createJury)
router.put("/jury/updateJury/:id",JuryController.updateJury)
router.delete("/jury/deleteJury/:id",JuryController.deleteJury)



//----------startups--done with postman----
router.get("/startup/getAllStartups",StartupContoller.getAllStartups )
router.get("/startup/getStartup/:id",StartupContoller.getStartup)
router.post("/startup/createStartup",StartupContoller.createStartup)
router.put("/startup/updateStartup/:id", StartupContoller.updateStartup)
router.delete("/startup/deleteStartup/:id", StartupContoller.deleteStartup)




//-----------------trainers----------
router.get("/trainers/getAllTrainers", TrainerController.getAllTrainers)
router.get("/trainers/getTrainer/:id", TrainerController.getTrainer)
router.put("/trainers/updateTrainer/:id", TrainerController.updateTrainer)
router.delete("/trainers/deleteTrainer/:id",TrainerController.deleteTrainer)
router.post("/trainers/createTrainer",TrainerController.createTrainer)

//-------------------bootcamp-----------
module.exports = router