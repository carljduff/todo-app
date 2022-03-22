import React, { useState } from 'react'
import Input from "./components/Input";
import StatusButton from './components/StatusButton';
import Todo from './components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {

  const [todos, setTodos] = useState([]);




  return (
    <div className="app">
     
     <Input />
     <Todo />
     <div className='button-wrapper'>
<StatusButton label={'All'}  />
<StatusButton label={'Completed'} />
<StatusButton label={'Done'}/>
       
     </div>

    </div>
  );
}

export default App;
