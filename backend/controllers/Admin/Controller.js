const getDBData = require("../../model/getDbData");

exports.getData = async (req, res) => {
    let getAllData = await getDBData("Select * From users where id = 1")
    res.json(getAllData);
}