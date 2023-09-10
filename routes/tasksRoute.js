const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = require ('../models/tasksModel')


router.post("/addtask", async (req, res) => {
  
    try {
      const docs = await Task.find({});
  
      const enq = new Task({
        name: req.body.name,
        comment: req.body.message,
        datetest:req.body.date?.substr(0,10),
        id:req.body._id
      });
  
      await enq.save();
  
  
  
      res.send({ message: "Task Added Successfully" });
    } catch (err) {
      
      res.status(400).json({ message: `Something Went Wrong ${err} ` });
    }
  });

module.exports = router;