import { useSnapshot } from "valtio";
import { store } from ".";
import { MessageType } from "@/app/(protected)/chat-dashboard/_components/ChatContent/ChatContent";

export function useMessages() {
  return useSnapshot(store).messages;
}
export function useMessagesById(chatRoomId: string) {
  return useSnapshot(store).messages.filter(
    (message) => chatRoomId === message.chatRoomId
  );
}

export function setNewMessage(message: MessageType) {
  store.messages.push(message);
}
