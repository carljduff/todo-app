import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Todo( { todos, todo, setTodos } ) {

const deleteHandler = () => {
   setTodos(todos.filter(item => item.id !== todo.id))

}


  
const checkHandler = (id) => {
 let item = todos.find(item => item.id === id)
  item.completed = 'true'
  let newState
}


    return(
        <>
       <Container>
  <Row className='todo-wrap'>
    <Col><button onClick={checkHandler} className='button check'>CHECK</button></Col>
    <Col><h4 className={`todo ${todo.completed ? 'line': ''}`}>{todo.label}</h4></Col>
    <Col><button onClick={deleteHandler} className='button'>X</button></Col>
  </Row>
</Container>
        </>
    )
}