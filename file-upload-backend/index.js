const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

// Create "uploads" folder if it doesn't exist
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(bodyParser.json());

// Endpoint to handle file uploads
app.post("/uploads", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const fileContent = req.file.buffer.toString("utf-8");
  const fileData = {
    name: req.file.originalname,
    content: fileContent,
  };

  const jsonFilePath = path.join(uploadsDir, `${req.file.originalname}`);

  fs.writeFile(jsonFilePath, JSON.stringify(fileData, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: "Error saving file", error: err });
    }
    res.json({ message: "File uploaded and saved successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
