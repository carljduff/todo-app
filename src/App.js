import React, { useState } from 'react'
import Input from "./components/Input";
import StatusButton from './components/StatusButton';
import Todo from './components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  const [todos, setTodos] = useState([]);




  return (
    <div className="app">
     
     <Input />
     <Todo />
     <div className='button-wrapper'>
<StatusButton label={'All'}  />
<StatusButton label={'To-Do'} />
<StatusButton label={'Completed'}/>
       
     </div>

    </div>
  );
}

export default App;
