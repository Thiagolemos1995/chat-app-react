import { snapshot } from "valtio";
import { store } from ".";
import { User } from "@/app/(protected)/chat-dashboard/_components/ChatList/ChatList";

export function useActiveUser() {
  return snapshot(store).activeUser;
}

export function setActiveUser(activeUser: User) {
  store.activeUser = activeUser;
}
