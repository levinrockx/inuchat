import { create } from "zustand";
import { ChatStore } from "./domain/types";

const useChatStore = create<ChatStore>((set, get) => ({
    messages: [],
    getMessages: async () => {
        return get().messages;
    },
    sendMessage: (message) => {
        // Todo : Logic for sending messages goes here.
        return get().getMessages();
    }
}));

export default useChatStore;