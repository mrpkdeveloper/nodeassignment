const express = require("express");
const app = express();
const path = require("path");
const { db } = require("./schema/connections");
const http = require("http");
const server = http.createServer(app);
const session = require("express-session");
const passport = require("./passport");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//the above lines are for handling post requests to the server

//passport
app.use(
  session({
    //this secret is used to encode cokkies
    secret: "somesecretstring",
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes").route); //this line execute index.js in api folder

const port = process.env.PORT || 3000;
db.sync({ alter: true })
  .then(() => {
    console.log("database synced successfully");
    server.listen(port, () => {
      console.log("server started at http://localhost:3000");
    });
  })
  .catch((err) => console.error("error in creating database"));
