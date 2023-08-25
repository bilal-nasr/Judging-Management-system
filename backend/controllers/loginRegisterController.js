const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dbUser = require("../model/getDbData")

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const users = await dbUser(`SELECT * FROM users WHERE name = "${username}" `);
        const user = users[0];
        // if (user && (await bcrypt.compare(password, user.password))) {
        //   const token = jwt.sign({ id: user.id }, SECRET_KEY);
        //   res.send({ success: true, token });
        // } else {
        //   res.status(400).send({ success: false, message: "Invalid credentials." });
        // }

        console.log(user)

    } catch (error) {
        res.status(400).send({ success: false, message: "Error logging in." });
    }

}