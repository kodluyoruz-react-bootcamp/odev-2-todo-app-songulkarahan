import { useState } from "react";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Info from "./components/Info";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <section className="todoapp">
        <Form todos={todos} setTodos={setTodos} task={task} setTask={setTask} />
        {/* This section should be hidden by default and shown when there are todos */}
        <TodoList todos={todos} setTodos={setTodos} />
        {/* This footer should hidden by default and shown when there are todos */}
        <Footer />
      </section>
      <Info />
    </>
  );
}

export default App;
