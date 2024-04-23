const express = require("express")
const { router } = require("../app")
const aughtController = require("../controllers/aughtController")
const aughtRouter = express.Router()

aughtRouter.get("/login", aughtController.login)
aughtRouter.post("/login", aughtController.signIn)
aughtRouter.get("/register", aughtController.register)
aughtRouter.get("/profile", aughtController.profile)


module.exports = aughtRouter