const route = require("express").Router();

route.use("/tasks", require("./task"));

route.use("/register", require("./register"));

route.use("/login", require("./login"));

route.use("/private", require("./private"));
exports = module.exports = {
  route,
};
