
import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: inputValue }]);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
