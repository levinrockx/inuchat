import { Message } from "ollama";

export type ChatStore = {
    sendMessage: (message: Message) => Promise<Message[]>;
    getMessages: () => Promise<Message[]>;
    messages: Message[];
};