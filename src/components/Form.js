import React from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";

function Form({ todos, setTodos, task, setTask }) {
  useEffect(() => {
    setTask("");
  }, [todos]);

  const handleOnChange = (e) => {
    setTask(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (task) {
      setTodos([...todos, { text: task, completed: false, id: nanoid() }]);
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
