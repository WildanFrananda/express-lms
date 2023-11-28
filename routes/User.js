const express = require("express")
const UserController = require("../controllers/UserController")

const user = express.Router()

user.post("/user/login", UserController.login)
user.post("/user/signup", UserController.signup)

module.exports = user