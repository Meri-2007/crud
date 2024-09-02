
import {Task} from "./Task"
export const TaskList = ({tasks,onDelete,onUpdate}) => {

    return <div>
        <p>TaskList</p>
        <div className="list">
            {
                tasks.map(task=>
                <Task key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate}/>)
            }
           
        </div>
    </div>
}