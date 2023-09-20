const dbBootcamp = require("../model/getDbData")

exports.getAllBootcamp = async (req, res) => {
    try {
        const data = await dbBootcamp(`select * from bootcamps'`)
        console.log(data)
        if (!data)
            res.json({ success: true, message: "no data found" })
        res.json({ success: true, data });
    } catch (error) {
        console.log(error)
    }
}
exports.getBootcamp = async (req, res) => {
    try {
      const { id } = req.params; // Assuming the jury ID is part of the URL parameters
  
      // Use parameterized queries to prevent SQL injection
      const data = await dbBootcamp(`SELECT * FROM Bootcamps WHERE Bootcamp_id = ${id}`);
  
      if (data.length === 0) {
        res.status(404).json({ success: false, message: "bootcamp not found" });
      } else {
        res.json({ success: true, data: data[0] }); // Assuming you want to return the first result if multiple records match
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };
  

exports.createBootcamp = async (req, res) => {
    try {
        const {name} = req.body; // Assuming you have these properties in your request body

        // Insert a new jury into the database
        const result = await dbBootcamp(`INSERT INTO bootcamps ( name) VALUES ( ${name})`);

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
        const { id } = req.params; // Assuming you have the ID of the jury to update in the URL
        const {name } = req.body; // Assuming you have these properties in your request body

        // Update the jury in the database
        
        const result = await dbBootcamp(`UPDATE BootcampView SET name=${name} WHERE ID=${id}`);

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
        const { id } = req.params; // Assuming you have the ID of the jury to delete in the URL

        // Delete the jury from the database
        
        const result = await dbBootcamp(`DELETE FROM Bootcamps WHERE ID=${id}`);

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
