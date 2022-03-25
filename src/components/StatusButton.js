export default function StatusButton({label, completeFunction, setStatus }) {


    
  
    return(

        <div>
        <button onClick={completeFunction} className="button">{label}</button>
        
        </div>
    )
}