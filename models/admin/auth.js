const mongoose = require("mongoose");

const adminAuthSchema = mongoose.Schema({
  mail: { type: String},
  password: { type: String},
});

// export default mongoose.model("AdminAuth", adminAuthSchema);

module.exports = mongoose.model("AdminAuth", adminAuthSchema)