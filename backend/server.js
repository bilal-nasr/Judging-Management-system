const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const loginRoutes = require("./routes/loginRoutes");

const app = express();
const PORT = 3006;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", loginRoutes); // Use your routes first

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
