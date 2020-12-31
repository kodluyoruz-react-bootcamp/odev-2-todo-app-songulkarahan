import React from "react";
import { useState } from "react";
/*
TODO: setTask("") edit with useEffect 
*/
function Header({ todos, setTodos, task, setTask }) {
  const handleOnChange = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: task, completed: false, id: Math.random() * 1000 },
    ]);
    setTask("");
    console.log(todos);
  };
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            value={task}
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={handleOnChange}
          />
        </form>
      </header>
    </>
  );
}

export default Header;
