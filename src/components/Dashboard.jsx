import { useEffect, useState } from "react"
import { AddTask } from "./AddTask"
import { Stats } from "./Stats"
import { TaskList } from "./TaskList"
import axios from "axios"

export const Dashboard = () => {
    const[tasks,setTasks]=useState([])
    const addTask= task=>{
        setTasks([...tasks,task])
    }
    const handleDelete=id=>{
        setTasks(tasks.filter(task=>task.id!=id))
    }
    const handleUpdate = (id, status) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, status } : task
        ));
    };
    const [limit,setLimit]=useState({
        completed:0
    })
    useEffect(()=>{
        const completed=tasks.filter(task=>task.status==="completed").length
        setLimit({completed})
    }

    ,[tasks])
    
    useEffect(()=>{
        axios
        .get("http://localhost:5000/tasks")
        .then(responce=>{
            setTasks(responce.data)
        })
    },[])
    return <div className="dashboard">
        <div className="row">
            <TaskList
            tasks={tasks}
            onDelete={handleDelete}
            onUpdate={handleUpdate}/>
            <AddTask
            onAdd={addTask}/>
        </div>
        <Stats
        completed={limit.completed}
        tasks={tasks}/>
    </div>
}