import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { List } from './List'

export default function Todo( { todos, todo, setTodos } ) {

const deleteHandler = () => {
   setTodos(todos.filter(item => item.id !== todo.id))

}
  
const checkHandler = () => {
  if(todo.completed === false) {
    todo.completed = true;
  } else if(todo.completed === true) {
    todo.completed = false;
  }
}

const howManyLeft = () => {
  setTodos(todos.filter(item => item.completed == true)).length;
}

    return(
        <>
       <Container>
  <Row className='todo-wrap'>
    <Col><button onClick={checkHandler} className='button check'>CHECK</button></Col>
    <Col><h4 className="todo">{todo.label}</h4></Col>
    <Col><button onClick={deleteHandler} className='button'>X</button></Col>
  </Row>
</Container>
        </>
    )
}