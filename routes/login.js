const route = require("express").Router();
const user = require("../schema/models").user;
const path = require("path");
const passport = require("../passport");

route.get("/", (req, res) => {
  //render login file
  res.send("login page here");
});

route.post(
  "/",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/private",
  })
);

// route.post('/', (req, res) => {
//     user.findOne({
//         where: {
//             username: req.body.username,
//             password: req.body.password
//         }
//     }).then((user) => {
//         res.status(201).send(user)
//     }).catch((err) => {
//         res.status(501).send({ error: "could not able to find the  user" })
//     })
// })

exports = module.exports = route;
