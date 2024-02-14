import { MessageType } from "@/app/(protected)/chat-dashboard/_components/ChatContent/ChatContent";
import {
  ChatRoom,
  User,
} from "@/app/(protected)/chat-dashboard/_components/ChatList/ChatList";
import { ChatRoomUser } from "@/app/(protected)/chat-dashboard/_components/ChatUsers/ChatUsers";
import { proxy } from "valtio";

export interface Store {
  chatRoom: ChatRoom[];
  chatRoomData: ChatRoom | undefined;
  messages: MessageType[];
  userList: ChatRoomUser[];
  activeUser: User | undefined;
}

export const store = proxy<Store>({
  chatRoom: [],
  chatRoomData: undefined,
  messages: [],
  userList: [],
  activeUser: undefined,
});
