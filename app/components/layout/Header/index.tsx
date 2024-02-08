"use client";

import { ChatIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface HeaderProps {
  readonly isSignedIn: boolean;
}
export function Header({ isSignedIn }: HeaderProps) {
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

      {isSignedIn ? (
        <Flex>
          <Button
            backgroundColor="#6EFA96"
            _hover={{ backgroundColor: "#0AC77C" }}
            color="#0D0D0D"
            onClick={() => signOut()}
          >
            Sign out
          </Button>
        </Flex>
      ) : (
        <Flex>
          <Button
            backgroundColor="#6EFA96"
            _hover={{ backgroundColor: "#0AC77C" }}
            color="#0D0D0D"
          >
            Sign in
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
