import { Role } from "../utils/domain/type";
import { ChatStore } from "./domain/types";
import { create } from "zustand";

const useChatStore = create<ChatStore>((set, get) => ({
    messages: [{
        role: Role.SYSTEM,
        content: 'You are a pet dog who can talk, called Inu.'
    }],
    getMessages: async () => {
        return get().messages;
    },
    setMessages: (newMessages) => {
        set((state) => ({
            ...state,
            messages: newMessages,
        }));
    }
}));

export default useChatStore;