import React from 'react';
import './TextButton.css'

function TextButton({children, black, wide, ...props}) {
    const classNames = () => [
        props.className,
        black? 'blackBtn' : '',
        wide? 'wideBtn' : '',
        'tBtn',
    ].join(' ')

    return ( 
        <button {...props} className={classNames()}>
            {children}
        </button>
    );
}

export default TextButton;