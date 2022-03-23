import React, { useState } from 'react'
import Input from "./components/Input";
import StatusButton from './components/StatusButton';
import {List} from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');





  return (
    <div className="app">
     
     <Input todos={todos} setTodos={setTodos} input={input} setInput={setInput} />
     <List todos={todos} />
     <div className='button-wrapper'>
<StatusButton label={'All'}  />
<StatusButton label={'To-Do'} />
<StatusButton label={'Completed'}/>
       
     </div>

    </div>
  );
}

export default App;
