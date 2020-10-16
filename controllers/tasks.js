const { tasks } = require("../schema/models");

//create new task
async function AddNewTask(task) {
  const new_task = await tasks.create({
    task,
  });

  return new_task;
}

//read all task
async function findAllTasks() {
  const all_tasks = await tasks.findAll({});
  return all_tasks;
}

//read specific task by id
async function findById(tid) {
  const One_task = await tasks.findAll({
    // include: [Users]
    where: {
      id: tid,
    },
  });
  return One_task;
}

// update task with task id
async function updatetask(tid, task) {
  const updatedtask = await tasks.update(
    { task: task },
    {
      where: {
        id: tid,
      },
    }
  );
  return updatedtask;
}

// Delete task with task id
async function deletetask(tid) {
  const deletdtask = await tasks.destroy({
    //returns 1 when deleted
    where: {
      id: tid,
    },
  });
  return deletdtask;
}

// test

// async function task() {
//   console.log(await AddNewTask("play"));

//   const tasks = await findAllTasks();
//   for (let t of tasks) {
//     console.log(`${t.id}\n${t.task}\n===============\n `);
//   }

//   const t = await findById(2);
//   console.log(t);

//   const t = await deletetask(2);
//   console.log(t);

//   const t = await updatetask(1, "swim");
//   console.log(t);
// }
// task();

module.exports = {
  findAllTasks,
  AddNewTask,
  findById,
  updatetask,
  deletetask,
};
