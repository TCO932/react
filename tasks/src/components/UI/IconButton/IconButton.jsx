import React from 'react';
import './IconButton.css'

function IconButton({children, black, ...props}) {
    const classNames = () => [
        props.className,
        black? 'blackBtn' : '',
        'iBtn',
    ].join(' ')

    return ( 
        <button {...props} className={classNames()}>
            {children}
        </button>
    );
}

export default IconButton;