"use server";
import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function sendMessage(message: string, chatRoomId: string) {
  const session = await auth();

  await db.message.create({
    data: {
      message,
      userId: session?.user.id,
      chatRoomId,
    },
    include: {
      user: {
        select: {
          email: true,
          image: true,
          username: true,
        },
      },
    },
  });
}
