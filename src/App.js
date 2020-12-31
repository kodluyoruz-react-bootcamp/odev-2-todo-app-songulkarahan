import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./components/Info";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <section className="todoapp">
        <Header
          todos={todos}
          setTodos={setTodos}
          task={task}
          setTask={setTask}
        />
        {/* This section should be hidden by default and shown when there are todos */}
        <TodoList task={task} todos={todos} />
        {/* This footer should hidden by default and shown when there are todos */}
        <Footer />
      </section>
      <Info />
    </>
  );
}

export default App;
