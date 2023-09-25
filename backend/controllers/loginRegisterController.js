const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dbUser = require("../model/getDbData")
const dotenv = require("dotenv")

dotenv.config()

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const SECRET_KEY = process.env.SECRET_KEY;
    try {
        console.log("from login controller")
        const users = await dbUser(`SELECT * FROM users WHERE username = "${username}" `);
        const user = users[0];
        console.log(user)
        if (user && user.password == password){
            const token = jwt.sign({ id: user.id }, SECRET_KEY);
            await dbUser(`update users set token='${token}' where username="${username}"`)
            res.send({ success: true, token,name: user.name, role: user.role});
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

