import { Message } from "ollama";

export type ChatStore = {
    setMessages: (messages: Message[]) => void;
    getMessages: () => Promise<Message[]>;
    messages: Message[];
};