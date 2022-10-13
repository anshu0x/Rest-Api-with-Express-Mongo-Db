const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const Student = require("./models/student");
//  middleware for receive data in json from post api
app.use(express.json());
require("./db/conn");
app.get("/", (req, res) => {
  res.send("hello boss");
});
app.get("/students", async (req, res) => {
  try {
    const data = await Student.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.post("/students", (req, res) => {
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.send("success");
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});
app.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const StudentData = await Student.findById({ _id });
    if (!StudentData) {
      return res.status(404).send();
    } else {
      res.send(StudentData);
    }
  } catch (err) {
    res.status(505).send(err);
  }
});
app.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const StudentData = await Student.findOneAndDelete({ _id });
    if (!StudentData) {
      return res.status(404).send();
    } else {
      res.send(StudentData);
    }
  } catch (err) {
    res.status(505).send(err);
  }
});
app.patch("/students/:id", async (req, res) => {
  const user = req.body;
  try {
    const _id = req.params.id;
    const StudentData = await Student.findOneAndUpdate({ _id }, user);
    if (!StudentData) {
      return res.status(404).send();
    } else {
      res.send(StudentData);
    }
  } catch (err) {
    res.status(505).send(err);
  }
});

app.listen(port, () => {
  console.log("App is running");
});
