import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Todo( {label} ) {


  

    return(
        <>
       <Container>
  <Row className='todo-wrap'>
    <Col><button className='button check'>CHECK</button></Col>
    <Col><h4 className="todo">{label}</h4></Col>
    <Col><button className='button'>X</button></Col>
  </Row>
</Container>
        </>
    )
}