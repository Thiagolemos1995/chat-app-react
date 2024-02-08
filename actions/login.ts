"use server";

import * as z from "zod";

import { LoginSchema } from "@/schemas";

export type MessageResponseType = {
  type: "error" | "success" | "warning" | "info";
  message: string;
};

export async function login(
  values: z.infer<typeof LoginSchema>
): Promise<MessageResponseType> {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { type: "error", message: "Invalid fields!" };
  }

  return { type: "success", message: "Signed in" };
}
