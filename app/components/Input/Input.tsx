import classes from './styles/input.module.css';
import { InputProps } from "./domain/types";

const Input: React.FC<InputProps> = (props) => {
    let customClasses = props.className + ' ' + classes.inputText;

    switch (props.type) {
        case 'text': customClasses += ' border'; break;
        default: break;
    }

    return <input {...props} className={customClasses} />;
};

export default Input;