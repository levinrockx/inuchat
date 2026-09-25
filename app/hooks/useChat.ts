import { generateUserMessage } from "../utils/messages";
import { useEffect, useRef, useState } from "react";
import useChatStore from "../store/useChatStore";

const useChat = () => {
    const { setMessages, messages, getMessages } = useChatStore();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [message, setMessage] = useState('');

    const send = async (inputMessage?: string) => {
        const previousMessage = await getMessages();
        const userMessage = generateUserMessage(inputMessage ?? message);
        const newMessages = [...previousMessage, userMessage];
        setMessages(newMessages);
        setMessage('');
    }

    useEffect(() => {
        let keyDownEvent = null;
        const parentInputRef = inputRef.current;

        if (parentInputRef) {
            keyDownEvent = parentInputRef.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' && message) {
                    console.log('Message: ', message);
                    send(inputRef.current?.value);
                }
            })
        }

        return () => {
            if (keyDownEvent && parentInputRef) {
                parentInputRef.removeEventListener('keydown', keyDownEvent);
            }
        }
    }, [send]);

    return {
        setMessage,
        messages,
        inputRef,
        message,
        send,
    };
};

export default useChat;