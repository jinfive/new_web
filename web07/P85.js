const express = require("express");
const fs = require("fs");
const port = 3000;

const app = express();

app.get("/json", (req, res) => {
  const json = {
    cat: "mew",
    dpg: "mang",
    rat: "jjick",
  };
  res.status(200).json(json);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
