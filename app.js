const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

//Routes
const taskRoutes = require("./routes/tasks");

app.use(cors());
app.use("/tasks", taskRoutes);
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
