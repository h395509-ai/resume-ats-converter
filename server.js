const express = require("express");
const multer = require("multer");
const fs = require("fs");
const atsFormatter = require("./atsFormatter");

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/convert", upload.single("resumeFile"), (req, res) => {
  const filePath = req.file.path;
  const rawText = fs.readFileSync(filePath, "utf8"); // works with .txt for now
  const atsResume = atsFormatter(rawText);
  res.json({ atsResume });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
