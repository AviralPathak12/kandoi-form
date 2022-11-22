const express = require("express");
const router = express.Router();
// const adminAuthRouter = express.Router();
const AdminAuth = require("../../models/admin/auth.js");
const bcrypt = require("bcryptjs");

const { signin } = require("../../controllers/admin/auth.js");

router.post("/signin", signin);

router.get(
    '/seed/adminUser',(async (req, res) => {

        const oldUser = await AdminAuth.deleteOne();

        const passwordValue = "12345678"
        const mail = "admin123@gmail.com"

        const hashedPassword = await bcrypt.hash(passwordValue, 12);

        const result = await AdminAuth.create({ mail : mail, password: hashedPassword});

        res.status(200);

    })
  );

// export default adminAuthRouter;

module.exports = router