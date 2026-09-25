import { Role } from "./domain/type";
import { Message } from "ollama";

export const generateUserMessage = (message: string): Message => ({
    role: Role.USER,
    content: message,
});

export const generateAssistantMessage = (message: string): Message => ({
    role: Role.ASSISTANT,
    content: message,
});