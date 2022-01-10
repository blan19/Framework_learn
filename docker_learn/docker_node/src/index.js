const express = require("express");
const PORT = 4000;

const app = express();
app.get("/", (req, res) => {
  res.send("hello world..!");
});

app.listen(PORT);
console.log(`Running on ${PORT}`);
