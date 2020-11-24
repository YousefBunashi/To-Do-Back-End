const express = require("express");
const router = express.Router();
const {
  taskCreate,
  taskList,
  taskUpdate,
  taskDelete,
} = require("../controllers/taskController");
// Task Create

router.post("/", taskCreate);

// Task List
router.get("/", taskList);

// task Update

router.put("/:taskId", taskUpdate);

// Task Delete

router.delete("/:taskId", taskDelete);

module.exports = router;
