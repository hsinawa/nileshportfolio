const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.json());
const path = require("path");

let dbconnection = require("./auth");

const AdminRoute = require("./routes/adminRoutes");
const messageRoute = require("./routes/messageRoutes");
const taskRoutes = require("./routes/tasksRoute");
const trailClassRoutes = require("./routes/trailClassRoutes");
const trialClassRoutes = require("./models/trialClassModel");

app.use("/api/admin/", AdminRoute);
app.use("/api/message/", messageRoute);
app.use("/api/task/", taskRoutes);
app.use("/api/trialclass", trailClassRoutes);

// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

const port = process.env.PORT || 4194;

app.listen(port, () => {
  console.log("Server started of Concept To Education");
});
