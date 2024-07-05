const express = require("express");
const app = express();
const client = require("./connection");
const taskController = require("./controllers/taskController");
client
  .connect(
    "mongodb+srv://punithsanthosh10:Superkings10@cluster0.h2xmjf3.mongodb.net/?appName=Cluster0"
  )
  .then((res) => {
    console.log("connection to mongodb");
  })
  .catch((err) => {
    console.log("failed to connect to mongodb");
    console.log(err);
  });
app.use(express.json());
app.get("/", (req, res) => {
  res.send("GET request successful,hello punithsanthosh");
});
app.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(200).send(`post request succesful with data:${data.name}`);
});
app.post("/task", taskController.createTask);
app.get("/task", taskController.readTask);
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
