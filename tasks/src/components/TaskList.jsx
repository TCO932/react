import React from 'react'
import TaskItem from './TaskItem/TaskItem';

function TaskList({taskList, setTask, deleteTask}) {
    return ( 
        <div>
            <h1 className='mv4'>Task list</h1>
            {taskList.map((task) => 
                <TaskItem className='mb3' key={task.id} task={task} setTask={() => setTask(task)} deleteTask={() => deleteTask(task.id)}></TaskItem>
            )}
        </div>
    );
}

export default TaskList;