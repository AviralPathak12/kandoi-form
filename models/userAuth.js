const mongoose = require("mongoose");

const userAuthSchema = mongoose.Schema({
  email: { type: String},
  password: { type: String},
});

// export default mongoose.model("AdminAuth", adminAuthSchema);

module.exports = mongoose.model("UserAuth", userAuthSchema)