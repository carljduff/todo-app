import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import StatusButton from "./components/StatusButton";
import { List } from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const [isFiltered, setIsFiltered] = useState("");
  const [doneView, setDoneView] = useState();
  const [todoView, setTodoView] = useState();
  
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("work")));
  }, []);

  useEffect(() => {
    localStorage.setItem("work", JSON.stringify(todos));
  }, [todos]);

  let howMany = todos.filter((todo) => todo.completed === false).length;

  const doneHandler = () => {
    setIsFiltered(true);
    setDoneView(todos.filter((item) => item.completed === true))
    setStatus("Done")
  }

  const todoHandler = () => {
    setIsFiltered(true);
    setTodoView(todos.filter((item) => item.completed === false))
    setStatus("Todo")
  }

  const allHandler = (e) => {
    setIsFiltered(true);
    setStatus("All")
    setTodos(todos.map((item) => item));
  }
  
  return (
    <>
      <Input
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
      />

      <List todos={todos} setTodos={setTodos} doneView={doneView} isFiltered={isFiltered} todoView={todoView} status={status} />

      <p className="count"> {` ${howMany} Items Left`} </p>
      <div className="button-wrapper">
       <button onClick={allHandler}>All</button>
       <button onClick={todoHandler}>Todo</button>
       <button onClick={doneHandler}>Done</button>

      </div>
    </>
  );
}

export default App;

