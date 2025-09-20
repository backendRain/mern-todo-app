/**
 * This component is responsible for displaying the list of todo items.
 * It receives the 'todos' array and the handler functions from App.js as props.
 */

import React from "react";
import TodoItem from "./TodoItem"; // Import the component for a single todo item.

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  return (
    <div className="todo-list">
      <h2>My Todos</h2>
      <ul>
        {/*
          We use the .map() method to iterate over the 'todos' array.
          For each 'todo' object in the array, we render a <TodoItem> component.
        */}
        {todos.map((todo) => (
          <TodoItem
            // The 'key' prop is a special, required prop for lists in React.
            // It helps React efficiently update the list when items are added, removed, or reordered.
            key={todo._id}
            // pass the individual todo object down to the TodoItem component.
            todo={todo}
            // also pass the update and delete functions down.
            onUpdate={onUpdateTodo}
            onDelete={onDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
