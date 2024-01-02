//app.js
const express = require("express")
const cors = require("cors");
const app = express()
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
require("./connection/connect")
const auth = require("./routes/auth");
const list = require("./routes/list");
app.get("/", (req, res) => {
  res.send({ users: username })
})
app.use(express.json())
app.use("/", auth);
app.use("/api", list);
app.listen(5000, () => {
  console.log("server is running  ")
})