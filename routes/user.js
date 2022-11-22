const express = require("express");
const userRouter = express.Router();

const { otpVerify, signin } = require("../controllers/user.js");

userRouter.post("/signin", signin);
userRouter.post("/otpVerify", otpVerify);

// export default userRouter;

module.exports = userRouter