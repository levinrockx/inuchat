import { generateUserMessage } from "../utils/messages";
import useChatStore from "../store/useChatStore";
import { useState } from "react";

const useChat = () => {
    const { setMessages, messages, getMessages } = useChatStore();
    const [message, setMessage] = useState('');

    const send = async () => {
        console.log(message);
        const previousMessage = await getMessages();
        const userMessage = generateUserMessage(message);
        const newMessages = [...previousMessage, userMessage];
        setMessages(newMessages);
        setMessage('');
    };

    return {
        setMessage,
        messages,
        message,
        send,
    };
};

export default useChat;