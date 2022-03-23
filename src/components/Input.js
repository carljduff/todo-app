import '../css/input.css'
export default function Input( {todos, setTodos, input, setInput}) {

    const inputValueHandler = (e) => {
        setInput(e.target.value)
    }

    const inputSubmitHandler = (e) => {
        setTodos([
            ...todos,
            {
                label: input,
                completed: false,
                id: Date.now()
            }
        ])
        console.log(todos)
        setInput('')
    }

    return(
        <div className='input-wrapper'>

        <input value={input} onChange={inputValueHandler} className='input' placeholder="What do you need to do?" /> 
        <button onClick={inputSubmitHandler} className='button'>Add</button>
        
        </div>
    )
}