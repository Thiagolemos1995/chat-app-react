import { Flex } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <Flex h="calc(100vh - 60px)" alignItems="center" justifyContent="center">
      {children}
    </Flex>
  );
}
