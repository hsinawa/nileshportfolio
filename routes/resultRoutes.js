const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const EnquireSchema = require("../models/messageModel");
const Result = require("../models/resultModel");

router.post("/addresult", async (req, res) => {
  try {
    const docs = await Result.find({});

    const enq = new Result({
      name: req.body.name,
      resultURL: req.body.url,
      standard: req.body.standard,
    });

    await enq.save();

    res.send({ message: "Result Added Successfully" });
  } catch (err) {
    res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

//   router.post("/getall", async (req, res) => {
//     try {
//       const getDate = req.body.date?.toString().substr(0, 10);

//       const docs = await Task.find({ id: req.body._id, datetest: getDate });

//       res.send(docs);
//     } catch (err) {
//       console.error(err);
//       res.status(400).json({ message: "Something Went Wrong" });
//     }
//   });
