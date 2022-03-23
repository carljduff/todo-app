import React, { useState } from 'react'
import Input from "./components/Input";
import StatusButton from './components/StatusButton';
import {List} from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('All')




  return (
    <div className="app">
      <h1>To-Do List</h1>
     
     <Input todos={todos} setTodos={setTodos} input={input} setInput={setInput} setStatus={setStatus} />
     <List todos={todos} />
     <div className='button-wrapper'>
<StatusButton label={'All'}  />
<StatusButton label={'To-Do'} />
<StatusButton label={'Complete'}/>
       
     </div>

    </div>
  );
}

export default App;
