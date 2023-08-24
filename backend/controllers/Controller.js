const getUserData = require("../model/user");

exports.getData = async (req, res) => {
    let getAllData = await getUserData("Select * From users where id = 1")
    res.json(getAllData);
}