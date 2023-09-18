const express = require("express");
const cors = require("cors");
const Routes = require("./routes/Routes");

const app = express();
const PORT = 3006;

app.use(cors());
app.use(express.json());

app.use("/api", Routes); // Use your routes first

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
