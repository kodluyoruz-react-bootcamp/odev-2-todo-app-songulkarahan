import React from "react";

function Todo({ text, id, todo, todos, setTodos }) {
  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const toggleTodoCompleted = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <li>
        <div className="view">
          <input
            onClick={toggleTodoCompleted}
            className="toggle"
            type="checkbox"
          />
          <label>{text}</label>
          <button onClick={() => deleteTodo(id)} className="destroy" />
        </div>
      </li>
    </div>
  );
}

export default Todo;
