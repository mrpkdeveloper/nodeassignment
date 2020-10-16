const { db } = require("./connections");
const { DataTypes } = require("sequelize");

const tasks = db.define("task", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  task: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

const user = db.define("userinfo", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

//test
// db.sync()
//   .then(() => console.log("database synced successfully"))
//   .catch((err) => console.error("error in creating database"));

module.exports = {
  db,
  tasks,
  user,
};
