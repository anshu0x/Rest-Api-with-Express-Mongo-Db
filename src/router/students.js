const express = require("express")
const router = new express.Router()
const Student = require("../models/student");
router.get("/", async (req, res) => {
    try {
      const data = await Student.find();
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  });
  router.post("/", (req, res) => {
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
  router.get("/:id", async (req, res) => {
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
  router.delete("/:id", async (req, res) => {
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
  router.patch("/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const StudentData = await Student.findOneAndUpdate({ _id }, req.body);
      if (!StudentData) {
        return res.status(404).send();
      } else {
        res.send(StudentData);
      }
    } catch (err) {
      res.status(505).send(err);
    }
  });

module.exports = router