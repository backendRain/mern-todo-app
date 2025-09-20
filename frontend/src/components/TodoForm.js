import { useState } from "react";

// This component is responsible for the "Add Todo" form.
// It receives a function 'onAddTodo' from its parent (App.js) as a prop.
const TodoForm = ({ onAddTodo }) => {
  // State to manage the text inside the input field.
  const [text, setText] = useState("");

  // function is called when the form is submitted.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission (page refresh).

    if (!text.trim()) return; // Don't add a todo if the input is empty or just spaces.

    // Call the onAddTodo function passed down from App.js, sending the text.
    onAddTodo(text);

    // Clear the input field after submission.
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <h2>Add a New Todo</h2>
      <input
        type="text"
        placeholder="e.g. Finish portfolio project"
        // Update the 'text' state every time the user types.
        onChange={(e) => setText(e.target.value)}
        // The value of the input is always tied to state.
        value={text}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
