import useChatStore from "../store/useChatStore";

const useChat = () => {
    const { sendMessage, messages, getMessages } = useChatStore();

    const send = (message: string) => {
        
    };

    return {
        getMessages,
        messages,
        send,
    }
};

export default useChat;