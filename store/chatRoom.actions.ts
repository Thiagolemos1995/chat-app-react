import { useSnapshot } from "valtio";
import { store } from ".";
import { ChatRoom } from "@/app/(protected)/chat-dashboard/_components/ChatList";

export function useChatRoom() {
  return useSnapshot(store).chatRoom;
}

export function setChatRoomData(chatRoomData: ChatRoom) {
  store.chatRoom = chatRoomData;
}
