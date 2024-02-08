import type { Metadata } from "next";
import AuthProvider from "./providers/AuthProvider";
import { UiProvider } from "./providers/ChakraProvider";
import { Header } from "./components/layout/Header";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Chat App",
  description: "Built with Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <AuthProvider>
        <body>
          <UiProvider>
            <Header />

            <Box bgGradient="linear(to-t, #0D0D0D, #2D2D2D)">{children}</Box>
          </UiProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
