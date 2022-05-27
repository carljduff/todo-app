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
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("work")));
  }, []);

  useEffect(() => {
    localStorage.setItem("work", JSON.stringify(todos));
  }, [todos, status]);

  let howMany = todos.filter((todo) => todo.completed === false).length;

  // let view = todos;

  // const statusFunction = (e) => {
  //   if (e.target.innerText === "Complete") {
  //     setStatus("Complete");
  //     console.log(status);
  //     view = todos.filter((todo) => todo.completed);
  //     setTodos(view)  
  //   }

  //   if (e.target.innerText === "All") {
  //     setStatus("All")
  //     console.log(status)
  //     view = todos.filter((todo) => todo)
  //     setTodos(view)
  //   }
  
  
  // };

  const filterHandler = (e) => {
    if (e.target.innerText === 'Complete') {
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      console.log(filteredTodos)
    }

    if (e.target.innerText === 'To-Do') {
      setFilteredTodos(todos.filter(todo => todo.completed === false))
      console.log(filteredTodos)
    }

    if (e.target.innerText === 'All') {
      setFilteredTodos(todos)
      console.log(filteredTodos)
    }
  }

  
  return (
    <>
      <Input
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
      />

      <List todos={todos} setTodos={setTodos} />

      <p className="count"> {` ${howMany} Items Left`} </p>
      <div className="button-wrapper">
        <StatusButton label={"All"} 
        filterHandler={filterHandler}
        />
        <StatusButton filterHandler={filterHandler} label={"To-Do"} />
        <StatusButton
                  filterHandler={filterHandler}

          label={"Complete"}
        />
      </div>
    </>
  );
}

export default App;

