import { InputProps } from './domain/types';
import classes from './styles/input.module.css';
import React from 'react';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    let customClasses = props.className + ' ' + classes.inputText;

    switch (props.type) {
        case 'text': customClasses += ' border'; break;
        default: break;
    }

    return <input {...props} className={customClasses} ref={ref} />;
});

Input.displayName = 'Input';

export default Input;