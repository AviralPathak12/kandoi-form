const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AWS = require("aws-sdk");

const Profile = require("../models/profile.js");

const secret = "test";

exports.signin = async (req, res) => {
  const { mobile } = req.body;

  try {
    const oldUser = await Profile.findOne({ loginMobile: mobile });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    // console.log('oldUser',oldUser);

    function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    var OTP = generateRandomNumber(1000, 9999);

    const otpInsert = new Profile({
      otp: OTP
    });
    
    await Profile.findOneAndUpdate(
      { loginMobile: mobile },
      {
        $set: {
          otp: OTP,
        }
      },
    )

    var params = {
      Message: "Welcome! Your mobile verification code is: " + OTP,
      PhoneNumber: mobile,
    };

    new AWS.SNS({ apiVersion: "2010-03-31" })
      .publish(params)
      .promise()
      .then((message) => {
        console.log('message',message);
        console.log("OTP SEND SUCCESS");
      })
      .catch((err) => {
        console.log("Error" + err);
      });

    res.status(200).json({ result: oldUser});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.otpVerify = async (req, res) => {

  const { mobile,  otp} = req.body;

  try {
    const oldUser = await Profile.findOne({ loginMobile: mobile });
    if(oldUser.otp == otp){
      const token = jwt.sign({ loginMobile: oldUser.loginMobile, id: oldUser._id }, secret, { expiresIn: "30d" });
      res.status(200).json({mobile:mobile,result: oldUser, token: token});
    }
    else{
      res.status(404).json({ message: "Otp not Matched" });
    }
  } 
  catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
