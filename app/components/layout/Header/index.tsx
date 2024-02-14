"use client";

import { ChatIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface HeaderProps {
  readonly sessionData: Session;
}

export function Header({ sessionData }: HeaderProps) {
  const isSignedIn = !!sessionData;

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
        <Flex gap="1rem" alignItems="center">
          {sessionData.user.image ? (
            <Avatar src={sessionData.user.image} />
          ) : null}
          <Flex flexDir="column" alignItems="center">
            <Text fontSize="0.7rem" color="white" fontWeight="bold">
              {sessionData.user.email}
            </Text>
            <Button
              size="sm"
              variant="ghost"
              _hover={{ backgroundColor: "#0AC77C" }}
              color="white"
              onClick={() => signOut()}
            >
              Sign out
            </Button>
          </Flex>
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
