let tasks = require("../tasks");

exports.taskCreate = (req, res) => {
  const id = tasks[tasks.length - 1].id + 1;
  //   const slug = slugify(req.body.name, { lower: true });
  const newTask = { id, ...req.body }; // id, slug are equivalent to id: id, slug: slug
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.taskList = (req, res) => {
  res.json(tasks);
};

exports.taskUpdate = (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);
  if (foundTask) {
    for (const key in req.body) foundTask[key] = req.body[key];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

exports.taskDelete = (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);
  if (foundTask) {
    tasks = tasks.filter((task) => task !== foundTask);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};
