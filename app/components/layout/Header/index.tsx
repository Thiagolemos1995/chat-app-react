"use client";

import { ChatIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
  return (
    <Flex
      backgroundColor="#0D0D0D"
      w="100vw"
      h="60px"
      alignItems="center"
      justifyContent="space-between"
      px="100px"
    >
      <Link href="/">
        <Flex alignItems="center" gap="0.5rem">
          <ChatIcon color="white" />
          <Text color="white">Chat App</Text>
        </Flex>
      </Link>

      <Flex>
        <Button
          backgroundColor="#6EFA96"
          _hover={{ backgroundColor: "#0AC77C" }}
          color="#0D0D0D"
        >
          Sign in
        </Button>
      </Flex>
    </Flex>
  );
}
