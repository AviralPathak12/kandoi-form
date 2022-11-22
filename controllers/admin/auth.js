const AdminAuth =  require("../../models/admin/auth.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = "test";

exports.signin = async (req, res) => {
  const { mail, password } = req.body;

  try {
    const oldUser = await AdminAuth.findOne({ mail });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ mail: oldUser.mail, id: oldUser._id }, secret, {
      expiresIn: "30d",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    console.log("inside catch", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
