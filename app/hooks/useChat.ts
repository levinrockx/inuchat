import { generateUserMessage } from "../utils/messages";
import { useEffect, useRef, useState } from "react";
import useChatStore from "../store/useChatStore";
import { Message } from "ollama";

const useChat = () => {
    const { setMessages, messages, getMessages } = useChatStore();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [message, setMessage] = useState('');

    const send = async (inputMessage?: string) => {
        const previousMessage = await getMessages();
        const userMessage = generateUserMessage(inputMessage ?? message);
        const newMessages = [...previousMessage, userMessage];
        try {
            const response = await fetch('/api', {
                method: 'POST',
                body: JSON.stringify(newMessages)
            }).then(res => res.json()) as Message;
            setMessages([...newMessages, response])
        } catch (err) {
            console.log(err);
        }
        setMessage('');
    };

    // Used for listening to enter key click on the chat input element.
    useEffect(() => {
        let keyDownEvent = null;
        const parentInputRef = inputRef.current;

        if (parentInputRef) {
            keyDownEvent = parentInputRef.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' && inputRef.current?.value) {
                    console.log('Message: ', inputRef.current?.value);
                    send(inputRef.current?.value);
                }
            })
        }

        return () => {
            if (keyDownEvent && parentInputRef) {
                parentInputRef.removeEventListener('keydown', keyDownEvent);
            }
        }
    }, []);

    return {
        setMessage,
        messages,
        inputRef,
        message,
        send,
    };
};

export default useChat;