import { Role } from "@/app/utils/domain/type";
import { ChatBubbleProps } from "./domain/types";
import classes from './styles/chatBubble.module.css';

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
    let customClasses = `${classes.chatBubble}`;

    switch (message.role) {
        case Role.USER: customClasses += ` ${classes.userBubble}`; break;
        case Role.ASSISTANT: customClasses += ` ${classes.assistantBubble}`; break;
        default: break;
    }

    return (
        <div className={customClasses}>
            {message.role} : {message.content}
        </div>
    )
};

export default ChatBubble;