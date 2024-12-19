const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
