const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

// Define the routes for the API
// GET all todos & POST a new todo
router.route("/").get(getTodos).post(createTodo);

// PUT (update) a todo & DELETE a todo
router.route("/:id").put(updateTodo).delete(deleteTodo);

module.exports = router;
