import { useSnapshot } from "valtio";
import { store } from ".";
import { ChatRoomUser } from "@/app/(protected)/chat-dashboard/_components/ChatUsers/ChatUsers";

export function useUsersList() {
  return useSnapshot(store).userList;
}

export function useUsersListById(chatRoomId: string) {
  return useSnapshot(store).userList.filter(
    (user) => chatRoomId === user.chatRoomId
  );
}

export function setNewRoomUser(user: ChatRoomUser) {
  user.id = Math.random().toString();
  const existingUser = store.userList.find(
    (userData) => user.email == userData.email
  );

  !existingUser && store.userList.push(user);
}
