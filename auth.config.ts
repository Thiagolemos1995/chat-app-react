import GitHub from "next-auth/providers/github";
import Credentials from "@auth/core/providers/credentials";

import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";

import { LoginSchema } from "./schemas";
import { getUserByUsername } from "./services/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { username, password } = validateFields.data;

          const user = await getUserByUsername(username);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) return user;
        }
        return null;
      },
    }),
    GitHub,
  ],
} satisfies NextAuthConfig;
