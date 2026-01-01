const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resumes", resumeRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
