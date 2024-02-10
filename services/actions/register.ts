"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail, getUserByUsername } from "@/services/user";

export type MessageResponseType = {
  type: "error" | "success" | "warning" | "info";
  message: string;
};

export async function register(
  values: z.infer<typeof RegisterSchema>
): Promise<MessageResponseType> {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { type: "error", message: "Invalid fields!" };
  }

  const { username, email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);
  const existingEmail = await getUserByEmail(email);
  const existingUser = await getUserByUsername(username);

  if (existingUser || existingEmail) {
    return { type: "error", message: "User already in use!" };
  }

  await db.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  // TODO: Send verification token email

  return { type: "success", message: "User Created" };
}
