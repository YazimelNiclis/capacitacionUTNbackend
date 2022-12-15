const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/user");

//Servidor express
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ time: Date() });
});

app.get("/error", (req, res) => {
  res.status(400).json({ error: "Recurso not found" });
});

app.use("/api", userRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
