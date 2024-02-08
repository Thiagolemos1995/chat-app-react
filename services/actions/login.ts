"use server";

import * as z from "zod";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

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

  const { username, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      username,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return { type: "success", message: "Signed In" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { type: "error", message: "Invalid credentials" };
        case "MissingSecret":
          return { type: "error", message: "Missing Secrets" };
        default:
          return { type: "error", message: "Something went wrong!" };
      }
    }

    throw error;
  }
}
