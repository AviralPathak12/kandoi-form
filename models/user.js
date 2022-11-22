const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  mobile: { type: Number, required: true },
});

// export default mongoose.model("User", userSchema);
module.exports = mongoose.model("User", userSchema);