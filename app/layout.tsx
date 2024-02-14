import type { Metadata } from "next";
import AuthProvider from "./providers/AuthProvider";
import { UiProvider } from "./providers/ChakraProvider";
import { Header } from "./components/layout/Header";
import { Box } from "@chakra-ui/react";
import { auth } from "@/auth";
import { Session } from "next-auth";

export const metadata: Metadata = {
  title: "Chat App",
  description: "Built with Next",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="pt-br">
      <AuthProvider>
        <body>
          <UiProvider>
            <Header sessionData={session as Session} />

            <Box bgImage="/background.jpg">{children}</Box>
          </UiProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
