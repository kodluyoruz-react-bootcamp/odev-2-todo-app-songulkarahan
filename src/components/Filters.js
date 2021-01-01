import React from "react";
import { useEffect } from "react";

//  // const [count, setCount] = useState(0);
// console.log(count);
// useEffect(() => {
//   todos.map((item) => {
//     if (item.completed === false) {
//     }
//     return setCount((c) => c + 1);
//   });
// }, [todos]);
//

function Filters({ todos, status, filter, setFilter, setStatus }) {
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
  useEffect(() => {
    filteredTodo();
  }, [todos, status]);
  return (
    <>
      <footer className="footer">
        {/* This should be `0 items left` by default */}
        <span className="todo-count">
          <strong></strong>
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
        <button className="clear-completed">Clear completed</button>
      </footer>
    </>
  );
}

export default Filters;
