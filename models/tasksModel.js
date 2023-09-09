const mongoose = require("mongoose");

const taskModel = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name of Task"],
    },

    deadline: {
      date: {
        type: String,
        require: [true, "Value of Date"],
      },

      day: {
        type: String,
        require: [true, "Value of Day"],
      },
      month: {
        type: String,
        require: [true, "Value of Month"],
      },
      year: {
        type: String,
        require: [true, "Value of Year"],
      },
    },
  },
  { timestamps: true }
);

const Tasks = mongoose.model("Tasks", taskModel);

module.exports = Tasks;
