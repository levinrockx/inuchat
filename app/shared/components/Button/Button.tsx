import { ButtonProps } from "./domain/types";
import classes from './styles/button.module.css';

const Button: React.FC<ButtonProps> = ({
    variant,
    children
}) => {

    return (
        <button className={`p-2 px-4 text-xl cursor-pointer ${classes[variant]}`}>
            {children}
        </button>
    );
};

export default Button;