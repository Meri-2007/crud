import axios from "axios"
import { useState } from "react"

export const AddTask = ({onAdd}) => {
    const [text,setText]=useState("")
    const [error,setError]=useState("")
    const handleSubmit= event=>{        
        event.preventDefault()
        if(!text.trim()){
            return setError("please fill")
        }   
        setError("")
        axios
        .post("http://localhost:5000/tasks",{text,status:"unstarted"})
        .then(resopnce=>{
            onAdd(resopnce.data)
            setText("")
        })
    }
    return <div>
        <p>AddTask</p>
        {error&& <p style={{color:"red"}}>{error}</p>}
        <form onSubmit={handleSubmit}>
        <input placeholder="Add any task" value={text} onChange={event=>setText(event.target.value)} />



        <button>Add</button>

        </form>

    </div>
}