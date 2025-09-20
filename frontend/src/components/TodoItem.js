import React from "react";

// This component displays a single todo item.
// It receives one 'todo' object and the action functions from its parent (TodoList.js).
const TodoItem = ({ todo, onUpdate, onDelete }) => {
  return (
    // Dynamically apply a 'completed' class if the todo is completed.
    // This is used by the CSS to add the line-through style.
    <li className={todo.isCompleted ? "completed" : ""}>
      <span>{todo.text}</span>
      <div className="actions">
        {/* The 'Complete' / 'Undo' button. Calls the onUpdate function with the todo's ID. */}
        <button onClick={() => onUpdate(todo._id)}>
          {todo.isCompleted ? "Undo" : "Complete"}
        </button>
        {/* The 'Delete' button. Calls the onDelete function with the todo's ID. */}
        <button onClick={() => onDelete(todo._id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
