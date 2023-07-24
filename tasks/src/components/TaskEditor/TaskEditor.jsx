import React, { useState, useEffect } from 'react';
import './TaskEditor.css'
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList';
import TextButton from '../UI/TextButton/TextButton';

function TaskEditor() {
    const emptyTask = () => ({ id: Date.now(), name: '', subtasks: []})
    const [currentTask, setCurrentTask] = useState(emptyTask());
    const [taskList, setTaskList] = useState([]);

    const getTasks = () => {
        return JSON.parse(localStorage.getItem('tasks'))
    }

    useEffect(() => {
        if (!localStorage.getItem('tasks')) {
            localStorage.setItem('tasks', JSON.stringify([]))
        } else {
            const tasks = getTasks()
            console.log(tasks)
            setTaskList(tasks)
        }
    }, []);

    const addCurrentTask = () => {
        const index = taskList.findIndex(task => task.id == currentTask.id)
        let newTaskList
        if (index !== -1) {
            newTaskList = [...taskList]
            newTaskList.splice(index, 1, currentTask)
        } else {
            newTaskList = [...taskList, currentTask]
        }
        setTaskList(newTaskList)
        setCurrentTask(emptyTask())
        localStorage.setItem('tasks', JSON.stringify(newTaskList))
    }

    const deleteTask = (taskId) => {
        const index = taskList.findIndex(task => task.id == taskId)
        if (index !== -1) {
            let newTaskList = [...taskList]
            newTaskList.splice(index, 1)
            setTaskList(newTaskList)
            setCurrentTask(emptyTask())
            localStorage.setItem('tasks', JSON.stringify(newTaskList))
        }
    }

    return ( 
        <div>
            <TaskForm task={currentTask} setCurrentTask={setCurrentTask}></TaskForm>
            <TextButton className="mb3" black wide onClick={addCurrentTask}>save task in localstorage</TextButton>
            <TextButton className="" wide onClick={() => setCurrentTask(emptyTask())}>create new task</TextButton>
            <TaskList taskList={taskList} setTask={setCurrentTask} deleteTask={((taskId) => deleteTask(taskId))}></TaskList>
        </div>
    );
}

export default TaskEditor;