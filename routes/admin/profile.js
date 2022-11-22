const express = require("express");
const { isauth } = require("../../middleware/isauth.js");
const adminProfileRouter = express.Router();
const {body,validationResult } = require("express-validator")

const { getProfile,showProfile,deleteProfile,approveProfile, updateProfile, approvedProfileList } = require("../../controllers/admin/profile.js");

adminProfileRouter.get("/profilelist", getProfile);
adminProfileRouter.get("/showProfile/:id", showProfile);
adminProfileRouter.delete("/deleteProfile/:id", deleteProfile);
adminProfileRouter.patch("/approveProfile/:id", approveProfile);
adminProfileRouter.patch("/updateProfile/:id",
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
body('familyName','length should be under 50').isLength({ max: 50 })
, updateProfile);
adminProfileRouter.get("/approvedProfileList", approvedProfileList);

// export default adminProfileRouter;
module.exports = adminProfileRouter