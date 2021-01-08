import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filter }) {
  const toggleAllCompleted = () => {
    //Working but wrong :(
    setTodos(
      todos.map((item) => {
        return { ...item, completed: true };
      })
    );
  };

  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label onClick={toggleAllCompleted} htmlFor="toggle-all">
          Mark all as complete
        </label>
        <ul className="todo-list">
          {filter.map((todo) => (
            <Todo
              todos={todos}
              setTodos={setTodos}
              todo={todo}
              completed={todo.completed}
              text={todo.text}
              key={todo.id}
              id={todo.id}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default TodoList;
