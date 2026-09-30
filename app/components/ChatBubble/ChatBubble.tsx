import { Role } from "@/app/utils/domain/type";
import { ChatBubbleProps } from "./domain/types";
import classes from './styles/chatBubble.module.css';
import FlexContainer from "../FlexContainer/FlexContainer";

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
    let customClasses = `${classes.chatBubble}`;

    switch (message.role) {
        case Role.USER: customClasses += ` ${classes.userBubble}`; break;
        case Role.ASSISTANT: customClasses += ` ${classes.assistantBubble}`; break;
        default: break;
    }

    return (
        <FlexContainer direction="column">
            <div className={classes.userName}>
                {message.role}
            </div>
            <div className={customClasses}>
                {message.content}
            </div>
        </FlexContainer>
    )
};

export default ChatBubble;