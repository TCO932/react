import React from 'react';
import TextButton from '../UI/TextButton/TextButton';
import './TaskItem.css'

function TaskItem({task, setTask, deleteTask, ...props}) {
    return (
        <div {...props}>
            <div className='task'>
                <svg className='avatar' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="32" fill="#121111"/>
                </svg>
                <div className='info'>
                    <div className='taskName'>
                        <span>{task.name}</span>
                    </div>
                    <ul className='subtasks'>
                        {task.subtasks.map((subtask) => <li key={subtask.id}>{`${subtask.text} - ${subtask.hours}h`}</li>)}
                    </ul>
                </div>
                <div className='load'>
                    <TextButton id='loadBtn' onClick={setTask}>load</TextButton>
                    <TextButton className='mb1' id='loadBtn' black onClick={deleteTask}>delete</TextButton>
                </div>
            </div>
            <hr className='solid mt3'></hr>
        </div>
    );
}

export default TaskItem;