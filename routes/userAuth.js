const express = require("express");
const router = express.Router();

const UserAuth = require("../models/userAuth");
const bcrypt = require("bcryptjs");

const { signin, signout } = require("../controllers/userAuth");

router.post("/loginuser", signin);
router.get("/signout", signout)

module.exports = router;