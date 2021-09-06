import express from "express";

const app = express();
const port: number = 4000;

app.post("/register", (req, res, next) => {
  console.log(req.body);
  next();
});

app.post("/register", (req, res) => {
  res.send({ message: "hello World..!", success: true });
});

app.listen(port || 4001, () => {
  console.log("connected web server port : ", port);
});
