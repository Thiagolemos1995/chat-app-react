import { MessageType } from "@/app/(protected)/chat-dashboard/_components/ChatContent";
import { ChatRoom } from "@/app/(protected)/chat-dashboard/_components/ChatList";
import { proxy } from "valtio";

export interface Store {
  chatRoom: ChatRoom[];
  chatRoomData: ChatRoom | undefined;
  messages: MessageType[];
}

export const store = proxy<Store>({
  chatRoom: [],
  chatRoomData: undefined,
  messages: [],
});
