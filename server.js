// import required packages
const path = require("path");
const express = require("express");
const fs = require("fs");
const api = require("./routes/index.js");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);

// GET Route for homepage
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

// GET Route for notes page
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

app.listen(PORT, () => console.log("Now listening"));
