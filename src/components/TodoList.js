import React from "react";
import Todo from "./Todo";
/* 
TODO: -todolist shown when there are --> <ul>
      
*/

function TodoList({ todos, setTodos, filter }) {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
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
