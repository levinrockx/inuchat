import { ButtonProps } from "./domain/types";

const Button: React.FC<ButtonProps> = ({
    children
}) => {
    return (
        <button>
            {children}
        </button>
    );
};

export default Button;