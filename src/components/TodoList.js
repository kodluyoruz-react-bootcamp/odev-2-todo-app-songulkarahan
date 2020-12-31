import React from "react";
import Todo from "./Todo";
import { useState, useEffect } from "react";
/* 
TODO: -todolist shown when there are --> <ul>
      
*/

function TodoList({ todos, setTodos }) {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              todos={todos}
              setTodos={setTodos}
              todo={todo}
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
