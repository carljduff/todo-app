import React, { useState } from 'react'
import Input from "./components/Input";
import StatusButton from './components/StatusButton';
import {List} from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from 'react-bootstrap/Card'


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('All')




  return (
   <>
   
   
<Card className="text-center">
  <Card.Header>To-Do List</Card.Header>
  <Card.Body>
     <Input todos={todos} setTodos={setTodos} input={input} setInput={setInput} setStatus={setStatus} />
    <Card.Text>
     <List todos={todos} />
    </Card.Text>
  </Card.Body>
</Card>

  
     <div className='button-wrapper'>
<StatusButton label={'All'}  />
<StatusButton label={'To-Do'} />
<StatusButton label={'Complete'}/>
     </div>
   </>




   
  );
}

export default App;
