const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dbUser = require("../model/getDbData")

exports.login = async (req, res) => {
    const { name, password } = req.body;
    try {
        console.log("hello")
        const users = await dbUser(`SELECT * FROM users WHERE name = "${name}" `);
        const user = users[0];
        console.log(user)
        if (user && user.password == password){
            res.send({ success: true});
        }
        else {
            res.status(400).send({ success: false, message: "Invalid credentials." });
        }

        // if (user && (await bcrypt.compare(password, user.password))) {
        //   const token = jwt.sign({ id: user.id }, SECRET_KEY);
        //   res.send({ success: true, token });
        // } else {
        //   res.status(400).send({ success: false, message: "Invalid credentials." });
        // }

       

    } catch (error) {
        res.status(400).send({ success: false, message: "Error logging in." });
    }

}