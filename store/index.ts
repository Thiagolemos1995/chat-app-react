import { ChatRoom } from "@/app/(protected)/chat-dashboard/_components/ChatList";
import { proxy } from "valtio";

export interface Store {
  chatRoom: ChatRoom[];
}

export const store = proxy<Store>({
  chatRoom: [],
});
