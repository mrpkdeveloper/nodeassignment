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

//test
db.sync()
  .then(() => console.log("database synced successfully"))
  .catch((err) => console.error("error in creating database"));

module.exports = {
  db,
  tasks,
};
