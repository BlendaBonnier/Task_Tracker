import Task from "./Task"



const Tasks = ({tasks, onDelete, onToggle}) => { //destructure to remove word prop!!!


    return (
        <>
            {tasks.map((task, index) => (
            <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}


export default Tasks
