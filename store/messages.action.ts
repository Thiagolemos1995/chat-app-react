import { useSnapshot } from "valtio";
import { store } from ".";
import { MessageType } from "@/app/(protected)/chat-dashboard/_components/ChatContent";

export function useMessages() {
  return useSnapshot(store).messages;
}

export function setNewMessage(message: MessageType) {
  store.messages.push(message);
}
