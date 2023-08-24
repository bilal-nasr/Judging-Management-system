const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();
const PORT = 3006;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes); // Use your routes first

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
