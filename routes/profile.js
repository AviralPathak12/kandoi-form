const express = require("express");
const { createProfile } = require("../controllers/profiles.js");
const {isauth} = require("../middleware/isauth.js")
const {body,validationResult } = require("express-validator")

const profileRouter = express.Router();

profileRouter.post("/createProfile",
body('list.*.name', 'length should be under 50').isLength({ max: 50 }),
body('list.*.education', 'length should be under 50').isLength({ max: 50 }),
body('list.*.wifeName', 'length should be under 50').isLength({ max: 50 }),
body('list.*.wifeEducation', 'length should be under 50').isLength({ max: 50 }),
body('list.*.inLawFamilyName', 'length should be under 50').isLength({ max: 50 }),
body('list.*.inLawAddress', 'length should be under 50').isLength({ max: 50 }),
body('list.*.inLawState', 'length should be under 50').isLength({ max: 50 }),
body('list.*.inLawCity', 'length should be under 50').isLength({ max: 50 }),
body('list.*.inLawPinCode', 'length should be under 50').isLength({ max: 50 }),
body('list.*.inLawDistrict', 'length should be under 50').isLength({ max: 50 }),
body('familyName','length should be under 50').isLength({ max: 50 }),
body('loginMobile', 'mobile must be a number').isNumeric().isLength({ max: 10 })
, createProfile);

// export default profileRouter;
module.exports = profileRouter