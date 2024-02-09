import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z
  .object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z
      .string()
      .min(1, { message: "Username is required" })
      .email({ message: "This must match a e-mail type" }),
    password: z
      .string()
      .min(6, { message: "Password need to have at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: `Password don't match`,
    path: ["confirmPassword"],
  });

export const NewChatRoomSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});
