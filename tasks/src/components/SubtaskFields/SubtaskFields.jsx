import React, {useState} from 'react'
import classes from './SubtaskFields.module.css'
import CustomInput from '../UI/CustomInput/CustomInput';
import IconButton from '../UI/IconButton/IconButton';

function SubtaskFields({subtask, addSubtask, deleteSubtask}) {
    const [currentSubtask, setCurrentSubtask] = useState(subtask);
    const editSubtask = (e) => {

    }
    return (
        <>
            <CustomInput 
                className='mb3' 
                value={subtask.text || ''}
                onChange={e => addSubtask({...subtask, text: e.target.value})}
                placeholder='Enter description'
                type="text"
            ></CustomInput>
            <CustomInput 
                className='mb3' 
                value={subtask.hours || ''}
                onChange={e => addSubtask({...subtask, hours: e.target.value})}
                placeholder='Hours'
                type="text"
            ></CustomInput>
            <IconButton className='mb3' onClick={() => deleteSubtask(subtask.id)}>x</IconButton>
        </>
    );
}

export default SubtaskFields;