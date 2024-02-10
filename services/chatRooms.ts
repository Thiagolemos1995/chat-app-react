import { db } from "@/lib/db";

export async function getChatRooms() {
  try {
    const chatRoom = await db.chatRoom.findMany();

    return chatRoom;
  } catch {
    return null;
  }
}
