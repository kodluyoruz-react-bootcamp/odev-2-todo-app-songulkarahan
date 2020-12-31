import React from "react";

function Todo({ text, id, todos, setTodos }) {
  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <div>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{text}</label>
          <button onClick={() => deleteTodo(id)} className="destroy" />
        </div>
      </li>
    </div>
  );
}

export default Todo;
