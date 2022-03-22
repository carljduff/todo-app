import React, { useState } from 'react'
import Input from "./components/Input";
import StatusButton from './components/StatusButton';
import Todo from './components/Todo';
import './App.css';


function App() {

  const [todos, setTodos] = useState([]);




  return (
    <div className="app">
     
     <Input />
     <StatusButton label={'All'}  />
     <StatusButton label={'Completed'} />
     <StatusButton label={'Done'}/>
     <Todo />





    </div>
  );
}

export default App;
