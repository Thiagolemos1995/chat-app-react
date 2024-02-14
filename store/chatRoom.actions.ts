import { useSnapshot } from "valtio";
import { store } from ".";
import { ChatRoom } from "@/app/(protected)/chat-dashboard/_components/ChatList/ChatList";

export function useChatRoom() {
  return useSnapshot(store).chatRoom;
}

export function addChatRoom(chatRoomData: ChatRoom) {
  store.chatRoom.push(chatRoomData);
}
