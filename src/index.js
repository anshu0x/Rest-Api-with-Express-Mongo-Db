const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./router/students");
//  middleware for receive data in json from post api
app.use(express.json());
require("./db/conn");
app.get("/", (req, res) => {
  res.send("hello boss");
});
app.use("/students", router);

app.listen(port, () => {
  console.log("App is running");
});
