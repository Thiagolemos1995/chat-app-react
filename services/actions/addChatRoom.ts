"use server";
import { db } from "@/lib/db";
import { NewChatRoomSchema } from "@/schemas";
import * as z from "zod";
import { MessageResponseType } from "./login";

export async function addChatRoom(
  values: z.infer<typeof NewChatRoomSchema>
): Promise<MessageResponseType> {
  const validatedFields = NewChatRoomSchema.safeParse(values);

  if (!validatedFields.success) {
    return { type: "error", message: "Invalid fields!" };
  }

  const { title, description } = validatedFields.data;

  await db.chatRoom.create({
    data: {
      title,
      description,
    },
  });

  return { type: "success", message: "Chat Room Created" };
}
