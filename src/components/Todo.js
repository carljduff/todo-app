import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'

export default function Todo() {
    return(
        <>

       <div className='todo-wrap'>
          

            <input type='checkbox' />
            <h4 className="todo"> THIS IS A TODO</h4>
            <button className='button'>X</button>
           
        </div>

        </>
    )
}