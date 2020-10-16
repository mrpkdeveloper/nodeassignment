const route = require("express").Router();

route.use("/tasks", require("./task"));
exports = module.exports = {
  route,
};
