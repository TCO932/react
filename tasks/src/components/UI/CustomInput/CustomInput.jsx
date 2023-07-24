import React from 'react'
import './CustomInput.css'

function CustomInput(props) {
    const classNames = () => [
        props.className,
        'cInput',
    ].join(' ')
    return ( 
        <input {...props} className={classNames()}/>
    );
}

export default CustomInput;