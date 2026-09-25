import { InputProps } from "./domain/types";

const Input: React.FC<InputProps> = (props) => {
    let classes = props.className + ' ';

    switch (props.type) {
        case 'text': classes += ' border'; break;
        default: break;
    }

    return <input {...props} className={classes} />;
};

export default Input;