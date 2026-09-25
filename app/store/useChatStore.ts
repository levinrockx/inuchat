import { ChatStore } from "./domain/types";
import { create } from "zustand";

const useChatStore = create<ChatStore>((set, get) => ({
    messages: [],
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