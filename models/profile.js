const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  profile: [
    {
        relation : {type: String},
        name : {type: String},
        dob : {type: String},
        mobile : {type: Number},
        education : {type: String},
        marraigeDate : {type: String},
        wifeName : {type: String},
        wifeDOB : {type: String},
        wifeEducation : {type: String},
        wifeMobile : {type: String},
        inLawFamilyName : {type: String},
        inLawAddress : {type: String},
        inLawState : {type: String},
        inLawCity : {type: String},
        inLawPinCode : {type: String},
        inLawDistrict : {type: String}
    },
  ],
  approved : {type: Number, defaultValue: 0},
  familyName : {type: String, required: true},
  loginMobile : {type: Number, required: true},
  otp : {type: String},
});

// export default mongoose.model("Profile", profileSchema);

module.exports = mongoose.model("Profile", profileSchema)