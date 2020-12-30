import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./components/Info";

function App() {
  return (
    <div>
      <section className="todoapp">
        <Header />
        {/* This section should be hidden by default and shown when there are todos */}
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn JavaScript</label>
                <button className="destroy" />
              </div>
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn React</label>
                <button className="destroy" />
              </div>
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Have a life!</label>
                <button className="destroy" />
              </div>
            </li>
          </ul>
        </section>
        {/* This footer should hidden by default and shown when there are todos */}
        <Footer />
      </section>
      <Info />
    </div>
  );
}

export default App;
