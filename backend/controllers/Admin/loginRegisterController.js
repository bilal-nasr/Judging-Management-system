const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dbUser = require("../../model/getDbData");
const dotenv = require("dotenv");

dotenv.config();

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const SECRET_KEY = process.env.SECRET_KEY;
    try {
        console.log("from login controller");
        const users = await dbUser(`SELECT * FROM users WHERE username = ?`, [username]);
        const user = users[0];
        console.log(user);

        if (!user) {
            return res.status(400).send({ success: false, message: "User not found." });
        }

        // Compare the hashed password with the provided password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const token = jwt.sign({ id: user.id }, SECRET_KEY);
            await dbUser(`UPDATE users SET token = ? WHERE username = ?`, [token, username]);
            const userData = {
                name: user.name,
                role: user.role,
                username: user.username,
            }
            console.log("Userdata from cont : ", userData)
            res.send({
                success: true,
                token,
                userData
            });
        } else {
            res.status(400).send({ success: false, message: "Invalid credentials." });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send({ success: false, message: "Internal server error." });
    }
};

exports.getTokenAndRole = async (req, res) => {
    try {
        const { username } = req.body;
        const response = await dbUser(`SELECT token, role FROM users WHERE username = ?`, [username]);
        if (response.length === 0) {
            res.status(404).json({ message: "User not found." });
        } else {
            res.json(response[0]);
        }
    } catch (error) {
        console.error("Error in getTokenAndRole:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

exports.signup = async (req, res) => {
    const { username, password, name, role } = req.body;
    const SECRET_KEY = process.env.SECRET_KEY;
    
    try {
        // Check if the username is already taken
        const existingUser = await dbUser(`SELECT * FROM users WHERE username = ?`, [username]);

        if (existingUser.length > 0) {
            return res.status(400).json({ success: false, message: "Username is already taken." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        const result = await dbUser(`INSERT INTO users (username, password, name, role) VALUES (?, ?, ?, ?)`, [username, hashedPassword, name, role]);

        if (result.affectedRows === 1) {
            const user = {
                id: result.insertId,
                username,
                name,
                role,
            };

            const token = jwt.sign({ id: user.id }, SECRET_KEY);

            res.status(201).json({
                success: true,
                token,
                user,
            });
        } else {
            res.status(500).json({ success: false, message: "Failed to create a new user." });
        }
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
};