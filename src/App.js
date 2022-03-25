import React, { useState, useEffect } from 'react'
import Input from "./components/Input";
import StatusButton from './components/StatusButton';
import {List} from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('All')
  

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem('work')))
  }, [])

useEffect(() => {
  localStorage.setItem('work', JSON.stringify(todos));
}, [todos]);


 let howMany = todos.filter((todo) => todo.completed === false).length;

 let view = todos;




 
 const statusFunction = (e) => {
   if(e.target.innerText === 'Complete') {
     setStatus('Complete')
     console.log(status)
     console.log('test')
   }
     
   if(status === 'Complete') {
     view = todos.filter((todo) => todo.completed)
    }
  }

   
 
 



  return (
   <>
   
   
  

  
     <Input todos={todos} setTodos={setTodos} input={input} setInput={setInput} />
    
     <List todos={todos} setTodos={setTodos} />
   

  
       <p className='count'> {` ${howMany} Items Left`} </p>
     <div className='button-wrapper'>
<StatusButton label={'All'} />
<StatusButton label={'To-Do'} />
<StatusButton todos={view} setStatus={setStatus} status={status} completeFunction={statusFunction} label={'Complete'} />
     </div>
   </>




   
  );
}

export default App;



{/* <Card className="text-center card">
  <Card.Header className='card'>To-Do List</Card.Header>
  <Card.Body>
     <Input todos={todos} setTodos={setTodos} input={input} setInput={setInput} />
    <Card.Text>
     <List todos={todos} setTodos={setTodos} />
    </Card.Text>
  </Card.Body>
</Card> */}