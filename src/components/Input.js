import '../css/input.css'
export default function Input ({todos, setTodos, input, setInput}) {

    const inputValueHandler = (e) => {
        setInput(e.target.value)
    }

    const inputSubmitHandler = (e) => {
        if(e.key === 'Enter') {

            setTodos([
                ...todos,
                {
                    label: input,
                    completed: false,
                    id: Date.now(),
                    uniqueID: Math.random() + 1
                }

            ])
            

            setInput('')
        }
    }


    

    return(
        <div className='input-wrapper'>

        <input value={input} onChange={inputValueHandler} onKeyDown={inputSubmitHandler} className='input' placeholder="What do you need to do?" /> 
    
        </div>
    )
}