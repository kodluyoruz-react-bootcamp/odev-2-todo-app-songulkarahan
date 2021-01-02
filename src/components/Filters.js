import React from "react";
import { useState, useEffect } from "react";

//

function Filters({ todos, setTodos, status, setStatus, setFilter, completed }) {
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    filteredTodo();
  }, [todos, status]);

  useEffect(() => {
    setCount((c) => c + 1);
    return () => {};
  }, [todos]);

  // useEffect(() => {
  //   console.log("workingg");
  //   return () => {
  //     setCount((n) => n + 1);
  //   }
  // }, [completed]);

  // const todoCount = () => {
  //   const uncompleted = todos.filter((todo) => todo.completed === false);
  //   return uncompleted;
  // };

  return (
    <>
      <footer className="footer">
        {/* This should be `0 items left` by default */}
        <span className="todo-count">
          <strong>{count}</strong>
          items left
        </span>
        <ul className="filters">
          <li>
            <button onClick={() => setStatus("all")} className="selected">
              All
            </button>
          </li>
          <li>
            <button onClick={() => setStatus("active")}>Active</button>
          </li>
          <li>
            <button onClick={() => setStatus("completed")}>Completed</button>
          </li>
        </ul>
        {/* Hidden if no completed items are left ↓ */}
        <button onClick={clearCompleted} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </>
  );
}

export default Filters;
