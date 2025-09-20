const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    text: {
      type: String,
      required: true, // A to-do item must have text
    },
    isCompleted: {
      type: Boolean,
      default: false, // New to-dos are not completed by default
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
  }
);

// Create the model from the schema
const Todo = mongoose.model("Todo", todoSchema);

// Export the model so we can use it in other files
module.exports = Todo;
