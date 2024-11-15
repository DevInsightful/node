const { createUser,getUser } = require("../controllers/user.js")
const express = require('express')
const router = express.Router()
router.get("/",getUser)
router.post("/",createUser)

module.exports=router