import axios from "axios"
export const Task = ({ task, onDelete, onUpdate }) => {
    const handledelete = () => {
        axios
            .delete("http://localhost:5000/tasks/" + task.id)
            .then(responce => {
                onDelete(responce.data.id)
            })
    }
    const handleStatusChange = (event) => {
        const newStatus = event.target.value;

        axios.patch(`http://localhost:5000/tasks/${task.id}`, { status: newStatus })
            .then(() => {
                onUpdate(task.id, newStatus);
            })
    };



    return <div>
        <p>{task.text}</p>
        <small>status:{task.status}</small>
        {task.status == "completed"
            ? <img src="https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png" />
            : task.status == "in progress"
                ? <img src="https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png" />
                : <img src="https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png" />
        }
        <select onChange={handleStatusChange}>
            <option value="unstarted" >unstarted</option>
            <option value="in progress" >in progress</option>
            <option value="completed" >completed</option>
        </select>
        <button onClick={handledelete}>delete</button>
    </div>
}


