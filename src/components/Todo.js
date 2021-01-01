import React from "react";
import { useState, useEffect } from "react";

function Todo({ text, id, todo, completed, todos, setTodos }) {
  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const toggleTodoCompleted = () => {
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !todo.completed };
      }
      return item;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            onClick={toggleTodoCompleted}
            className="toggle"
            type="checkbox"
          />
          <label>{text}</label>
          <button onClick={() => deleteTodo(id)} className="destroy" />
        </div>
      </li>
    </div>
  );
}

export default Todo;
