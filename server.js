const express = require("express");
const server = express();

server.use("/", (req, res) => {
  res.send("hello world");
});
server.listen(3000, console.log("running on port 3000"));
