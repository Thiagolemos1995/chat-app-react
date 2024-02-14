import { useSnapshot } from "valtio";
import { store } from ".";
import { ChatRoom } from "@/app/(protected)/chat-dashboard/_components/ChatList/ChatList";

export function useChatRoomData() {
  return useSnapshot(store).chatRoomData;
}

export function setChatRoomData(chatRoomData: ChatRoom) {
  store.chatRoomData = chatRoomData;
}
