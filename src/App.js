import { useState } from "react";
import Form from "./components/Form";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  return (
    <>
      <section className="todoapp">
        <Form todos={todos} setTodos={setTodos} task={task} setTask={setTask} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          status={status}
          setStatus={setStatus}
          filter={filter}
        />
        <Filters
          todos={todos}
          setTodos={setTodos}
          status={status}
          setStatus={setStatus}
          setFilter={setFilter}
        />
      </section>
      <Footer />
    </>
  );
}

export default App;
