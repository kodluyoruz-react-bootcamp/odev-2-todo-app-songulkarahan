import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
/*
TODO: setTask("") edit with useEffect 
*/
function Form({ todos, setTodos, task, setTask }) {
  const handleOnChange = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (task) {
      setTodos([...todos, { text: task, completed: false, id: nanoid() }]);
      setTask("");
    }
  };
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={addTodo}>
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

export default Form;
