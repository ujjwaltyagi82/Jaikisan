const express = require('express')
const router = express.Router()



const customerController = require("../controllers/customerController")

const cardcontroller = require("../controllers/cardController")

router.post("/createCustumer",customerController.createCustomer)

router.get("/getCustomer",customerController.getCustomer)

router.put("/deleteCustomer",customerController.deleteCustomer)

router.post("/createCard",cardcontroller.createCard)

router.get("/getCard",cardcontroller.getCard)


module.exports= router

