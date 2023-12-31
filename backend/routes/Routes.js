
const express = require("express")
const router = express.Router()
const loginRegisterController = require("../controllers/Admin/loginRegisterController")
const JuryController = require("../controllers/Admin/JuryController")
const StartupContoller = require("../controllers/Admin/StartupController")
const TrainerController = require("../controllers/Admin/TrainerController")
const BootcampController = require("../controllers/Admin/BootcampController")
const EvaluationController = require("../controllers/Admin/EvaluationController")
const SAdminController= require("../controllers/Admin/SAdminController")
//--------------------login Routes-----------------

router.post("/users/login", loginRegisterController.login);
router.post("/users/getTokenAndRole",loginRegisterController.getTokenAndRole)
router.post("/users/signup", loginRegisterController.signup);


//-------------------Data Routes jury-done with postman-------------------

router.get("/jury/getAllJuries", JuryController.getAllJuries)
router.get("/jury/getJury/:id", JuryController.getJury)
router.post("/jury/createJury", JuryController.createJury)
router.put("/jury/updateJury/:id", JuryController.updateJury)
router.delete("/jury/deleteJury/:id", JuryController.deleteJury)



//----------startups--done with postman----
router.get("/startup/getAllStartups", StartupContoller.getAllStartups)
router.get("/startup/getStartup/:id", StartupContoller.getStartup)
router.post("/startup/createStartup", StartupContoller.createStartup)
router.put("/startup/updateStartup/:id", StartupContoller.updateStartup)
router.delete("/startup/deleteStartup/:id", StartupContoller.deleteStartup)




//-----------------trainers----------
router.get("/trainers/getAllTrainers", TrainerController.getAllTrainers)
router.get("/trainers/getTrainer/:id", TrainerController.getTrainer)
router.put("/trainers/updateTrainer/:id", TrainerController.updateTrainer)
router.delete("/trainers/deleteTrainer/:id", TrainerController.deleteTrainer)
router.post("/trainers/createTrainer", TrainerController.createTrainer)

//-------------------bootcamp-----------
router.get("/Bootcamp/getAllBootcamps", BootcampController.getAllBootcamp)
router.get("/Bootcamp/getBootcamp/:id", BootcampController.getBootcamp)
router.put("/Bootcamp/updateBootcamp/:id", BootcampController.updateBootcamp)
router.delete("/Bootcamp/deleteBootcamp/:id", BootcampController.deleteBootcamp)
router.post("/Bootcamp/createBootcamp", BootcampController.createBootcamp)
router.get("/Bootcamp/getBootJury/:id",BootcampController.getBootJury)

//--------------------evaluataion----------
router.post("/evaluation/addGrade", EvaluationController.AddJuryStartupGrade)
router.get("/evaluation/getAllCriteria",EvaluationController.getAllCriteria)
router.post("/evaluation/createCriteria", EvaluationController.createCriteria)
router.put("/evaluation/updateCriteria/:id",EvaluationController.updateCriteria)
router.delete("/evaluation/deleteCriteria/:id",EvaluationController.deleteCriteria)

//---------------admin------------
router.post("/admin/createAdmin",SAdminController.createAdmin)
router.get("/admin/getAllAdmin",SAdminController.getAllAdmins)
router.get("/admin/getAdmin/:id", SAdminController.getAdmin)
router.put("/admin/updateAdmin/:id",SAdminController.updateAdmin)
router.delete("/admin/deleteAdmin/:id",SAdminController.deleteAdmin)
module.exports = router