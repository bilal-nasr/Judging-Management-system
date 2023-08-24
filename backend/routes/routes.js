
const express = require("express")
const router = express.Router()
const controller = require("../controllers/Controller")


router.get("/getdata", controller.getData);


module.exports = router