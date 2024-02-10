import { db } from "@/lib/db";

export async function fetchMessagesByRoom(chatRoomId: string) {
  try {
    const messages = await db.message.findMany({
      where: { chatRoomId: chatRoomId },
    });

    return messages;
  } catch {
    return null;
  }
}
