import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
