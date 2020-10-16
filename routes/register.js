const user = require("../schema/models").user;
const route = require("express").Router();
const path = require("path");

route.get("/", (req, res) => {
  // render signup page
  res.send("register page here");
});

route.post("/", (req, res) => {
  user
    .create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password,
      address: req.body.address,
    })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(501).send({ error: "could not able to add new user" });
    });
});

exports = module.exports = route;
