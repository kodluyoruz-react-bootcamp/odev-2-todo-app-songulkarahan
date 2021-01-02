import { useState } from "react";
import Form from "./components/Form";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  //const [completed, setCompleted] = useState(false);
  const [filter, setFilter] = useState([]);

  return (
    <>
      <section className="todoapp">
        <Form todos={todos} setTodos={setTodos} task={task} setTask={setTask} />
        {/* This section should be hidden by default and shown when there are todos */}
        <TodoList todos={todos} setTodos={setTodos} filter={filter} />
        {/* This footer should hidden by default and shown when there are todos */}
        <Filters
          todos={todos}
          setTodos={setTodos}
          completed={todos.completed}
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
