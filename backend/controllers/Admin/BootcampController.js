const dbBootcamp = require("../../model/getDbData");

exports.getAllBootcamp = async (req, res) => {
  try {
    const data = await dbBootcamp(`select * from bootcamps`);
    //console.log(data)
    if (!data) res.json({ success: true, message: "no data found" });
    res.json({ success: true, data });
  } catch (error) {
    console.log(error);
  }
};
exports.getBootcamp = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await dbBootcamp(
      `SELECT * FROM bootcamps WHERE bootcampId = ?`,
      [id]
    );

    if (data.length === 0) {
      res.json({ success: false, message: "bootcamp not found" });
    } else {
      res.json({ success: true, data: data[0] });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.createBootcamp = async (req, res) => {
  try {
    const { name, type, year } = req.body;

    const result = await dbBootcamp(
      `INSERT INTO bootcamps (name,type,year) VALUES ( ?,?,?)`,
      [name, type, year]
    );

    if (result.affectedRows === 1) {
      res.json({ success: true, message: "Bootcamp created successfully" });
    } else {
      res.json({ success: false, message: "Failed to create a Bootcamp" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.updateBootcamp = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, year } = req.body;
    const result = await dbBootcamp(
      `UPDATE bootcamps SET name=?,type=?,year=? WHERE bootcampId=?`,
      [name, type, year, id]
    );
    if (result.affectedRows === 1) {
      res.json({ success: true, message: "Bootcamp updated successfully" });
    } else {
      res.json({ success: false, message: "Failed to update the Bootcamp" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
exports.deleteBootcamp = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await dbBootcamp(
      `DELETE FROM bootcamps WHERE bootcampId = ?`,
      [id]
    );

    if (result.affectedRows === 1) {
      res.json({ success: true, message: "Bootcamp deleted successfully" });
    } else {
      res.json({ success: false, message: "Failed to delete the Bootcamp" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
// get bootcamp id from jury bootcamp view
exports.getBootJury = async (req, res) => {
  try {
    const { username } = req.body;
    const jId = await dbBootcamp(
      `select juryId from JudgeView where UserName=? `,
      [username]
    );
    const bcampId = await dbBootcamp(
      `select bootcamps_bootcampId from jury_has_bootcamps where jury_juryId=?`,
      [jId]
    );
    const startupsBootcamp = await dbBootcamp(
      `select startupId, startup_name, startup_description from bootcamp_startups_view where bootcampId=?`,
      [bcampId]
    );
    if (startupsBootcamp.length > 0) {
      res.json({
        success: true,
        message: "startups are related to this bootcamp",
      });
    } else {
      res.json({ success: false, message: "failed to get the startups" });
    }
  } catch (error) {}
};
