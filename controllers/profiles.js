const Profile = require("../models/profile.js");
const {body,validationResult } = require("express-validator")

exports.createProfile = async (req, res) => {
  const { list, loginMobile, familyName } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log('errors',errors);
    return res.status(400).json({ errors: errors.array() });
  }
  
  const newProfile = new Profile({
    profile: list,
    approved: 0,
    loginMobile: loginMobile,
    familyName: familyName,
    otp: "",
  });

  try {
    await newProfile.save();

    res.status(201).json(newProfile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
