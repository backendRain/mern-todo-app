import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  // === STATE MANAGEMENT ===
  // State to hold the array of todo items. Starts as an empty array.
  const [todos, setTodos] = useState([]);
  // State to hold the current theme ('light' or 'dark').
  const [theme, setTheme] = useState("light");

  // === API ENDPOINT ===
  // Define the base URL for the API. It's good practice to have this in one place.
  const API_BASE = "http://localhost:5001/api/todos";

  // === EFFECTS ===
  // This useEffect hook runs once when the component first mounts.
  // Its job is to fetch the initial list of todos from the backend.
  useEffect(() => {
    // Define an async function to get the data.
    const fetchTodos = async () => {
      try {
        const response = await fetch(API_BASE);
        const data = await response.json();
        setTodos(data); // Update the 'todos' state with the fetched data.
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, []); // The empty dependency array [] ensures this effect runs only once.

  // This useEffect hook runs whenever the 'theme' state changes.
  // It applies the current theme class to the <body> element.
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // === API FUNCTIONS ===
  // Function to add a new todo item.
  const addTodo = async (text) => {
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const newTodo = await response.json();
    // Add the new todo to the beginning of the local 'todos' array.
    setTodos([newTodo, ...todos]);
  };

  // Function to update a todo (mark as complete/incomplete).
  const updateTodo = async (id) => {
    const response = await fetch(`${API_BASE}/${id}`, { method: "PUT" });
    const updatedTodo = await response.json();
    // Update the local state by replacing the old todo with the updated one.
    setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
  };

  // Function to delete a todo item.
  const deleteTodo = async (id) => {
    await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
    // Update the local state by filtering out the deleted todo.
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  // === THEME TOGGLE FUNCTION ===
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  // === RENDERED JSX ===
  return (
    <div className="App">
      <div className="header">
        <h1>My To-Do List</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      {/* The TodoForm component, which receives the addTodo function as a prop. */}
      <TodoForm onAddTodo={addTodo} />

      {/* The TodoList component, which receives the list of todos and the action functions. */}
      <TodoList
        todos={todos}
        onUpdateTodo={updateTodo}
        onDeleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
