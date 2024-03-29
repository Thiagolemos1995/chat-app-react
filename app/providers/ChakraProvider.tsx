// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";

export function UiProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
