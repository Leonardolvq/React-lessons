import { useState } from 'react'
import '../style/todolist.css'

export default function Tasks(){
    const [inputValue, setinputValue] = useState('')
    const [tasks, setTask] = useState([])

    const deleteTask = (taskindex) => {
        const currentTasks = tasks
        currentTasks.splice(taskindex, 1)
        setTask([...currentTasks])
    }

    const taskCompleted = (index) => {
        const updatedTasks = [...tasks]; // Copie tableau taks 
        updatedTasks[index].taskCompleted = !updatedTasks[index].taskCompleted; // Inversion de l'état taskCompleted de la tâche spécifique
        setTask(updatedTasks); // Mise à jour de l'état avec la nouvelle liste de tâches
        console.log(tasks)
    };

    return (
        <div>
            <h2>To Do List</h2>
            <form>
                <input type="text" value={inputValue} onChange={(event) => setinputValue(event.target.value)}/>
                <button type="button" onClick={() => setTask([...tasks, {taskname: inputValue, taskCompleted: false}])}>Add Task</button>
            </form>
            {tasks.map((task, index) => {
                return (
                    <div key={index + task} className='item__todolist'>
                        <p  className='task__item'>{task.taskname}</p>
                        <div className='buttons_task'>
                            <button type='button' onClick={() => deleteTask(index)}>Delete</button>
                            <input className="checkbox"type='checkbox' onClick={() => taskCompleted(index)}/>
                        </div>
                    </div>)
            })}
        </div>
    )
}