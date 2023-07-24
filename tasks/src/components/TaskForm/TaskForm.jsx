import React, { useState } from 'react';
import './TaskForm.css'
import SubtaskFields from '../SubtaskFields/SubtaskFields';
import TextButton from '../UI/TextButton/TextButton';
import CustomInput from '../UI/CustomInput/CustomInput';
import IconButton from '../UI/IconButton/IconButton';

function TaskForm({task, setCurrentTask}) {
    const addSubtask = (subtask = {id: Date.now(), text: '', hours: ''}) => {
        const index = task.subtasks.findIndex(item => item.id == subtask.id)
        if (index !== -1) {
            let newSubtasks = [...task.subtasks];
            newSubtasks.splice(index, 1, subtask)
            setCurrentTask({...task, subtasks: newSubtasks})
        } else {
            setCurrentTask({...task, subtasks: [subtask, ...task.subtasks]})
        }
    }

    const deleteSubtask = (taskId) => {
        setCurrentTask({...task, subtasks: task.subtasks.filter(subtask => subtask.id != taskId)})
    }
    return (
        <div>
            <h1 className="mv4">Task name</h1>
            <CustomInput
                className='mb3'
                value={task.name}
                onChange={e => setCurrentTask({...task, name: e.target.value})}
                placeholder='Enter task name'
                type="text"
            />
            <div className="subtask_header mb3">
                <h1>Subtasks</h1>
                <IconButton black onClick={() => addSubtask()}>+</IconButton>
            </div>
            {
                task.subtasks.length? 
                <div className="grid mb3">
                    <span>Description</span>
                    <span>Time</span>
                    <span>Button</span>
                    {task.subtasks.map((subtask) => 
                        <SubtaskFields key={subtask.id} subtask={subtask} addSubtask={addSubtask} deleteSubtask={(taskId => deleteSubtask(taskId))}></SubtaskFields>
                    )}
                </div>
                : <></>
            }
        </div>
    );
}

export default TaskForm;