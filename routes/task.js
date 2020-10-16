const {
  findById,
  findAllTasks,
  AddNewTask,
  updatetask,
  deletetask,
} = require("../controllers/tasks");
const task = require("../schema/models").tasks;
const route = require("express").Router();

//create new task
route.post("/", (req, res) => {
  const task = AddNewTask(req.body.task)
    .then((task) => {
      res.status(201).send(task);
    })
    .catch((err) => {
      console.log(err);
      res.status(201).send(err);
      // res.status(501).send({ error: "task not added" })
    });
});

//read all task
route.get("/", async (req, res) => {
  //get all tasks
  console.log("find all task");
  await findAllTasks()
    .then((tasks) => {
      res.status(200).send(tasks);
    })
    .catch((err) => {
      res.status(500).send({ error: "could not able to find tasks" });
    });
});

//read specific task by id
route.get("/:id", async (req, res) => {
  const task = await findById(req.params.id)
    .then((task) => {
      res.status(200).send(task);
    })
    .catch((err) => {
      res.status(500).send({ error: "could not able to find task" });
    });
});

//update task
route.post("/:id/:task", (req, res) => {
  const task = updatetask(req.params.id, req.params.task)
    .then((task) => {
      res.status(201).send(task);
    })
    .catch((err) => {
      console.log(err);
      res.status(201).send(err);
    });
});

//delete task
route.post("/:id", (req, res) => {
  const task = deletetask(req.params.id)
    .then((task) => {
      res.status(201).send(task);
    })
    .catch((err) => {
      console.log(err);
      res.status(201).send(err);
    });
});

exports = module.exports = route;
