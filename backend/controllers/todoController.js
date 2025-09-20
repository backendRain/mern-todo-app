const Todo = require("../models/todoModel");

// @desc    Get all todos
// @route   GET /api/todos
const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(todos);
};

// @desc    Create a new todo
// @route   POST /api/todos
const createTodo = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text field is required" });
  }

  const todo = await Todo.create({ text });
  res.status(201).json(todo);
};

// @desc    Update a todo (e.g., mark as complete)
// @route   PUT /api/todos/:id
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  // flip the 'isCompleted' status
  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { isCompleted: !todo.isCompleted },
    { new: true } // This returns the updated document
  );

  res.status(200).json(updatedTodo);
};

// @desc    Delete a todo
// @route   DELETE /api/todos/:id
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndDelete(id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.status(200).json({ message: "Todo deleted successfully" });
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
