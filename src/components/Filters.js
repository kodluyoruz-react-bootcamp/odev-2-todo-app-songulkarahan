import React from "react";
import { useState, useEffect } from "react";

function Filters({ todos, setTodos, status, setStatus, setFilter }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let sayi = 0;
    todos.forEach((todo) => {
      !todo.completed && sayi++;
    });
    setCount(sayi);
  }, [todos]);

  useEffect(() => {
    filteredTodo();
  }, [todos, status]);

  const filteredTodo = () => {
    switch (status) {
      case "completed":
        setFilter(todos.filter((todo) => todo.completed === true));
        break;
      case "active":
        setFilter(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilter(todos);
        break;
    }
  };

  const clearCompleted = () => {
    const list = todos.filter((todo) => todo.completed !== true);
    setTodos(list);
  };

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{`${count} `}</strong>
          items left
        </span>
        <ul className="filters">
          <li>
            <button
              className={`${status === "all" && "selected"}`}
              onClick={() => setStatus("all")}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={`${status === "active" && "selected"}`}
              onClick={() => setStatus("active")}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className={`${status === "completed" && "selected"}`}
              onClick={() => setStatus("completed")}
            >
              Completed
            </button>
          </li>
        </ul>
        <button onClick={clearCompleted} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </>
  );
}

export default Filters;
