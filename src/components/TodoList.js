import React from "react";
import { useState, useEffect } from "react";
/* 
TODO: -todolist shown when there are --> <ul>
      
*/

function TodoList({ todos }) {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{todo.text}</label>
                <button className="destroy" />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default TodoList;
