"use client";

import { useChatRoom } from "@/store/chatRoom.actions";
import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Session } from "next-auth";

interface ChatUsersProps {
  readonly session: Session;
}

export default function ChatUsers({ session }: ChatUsersProps) {
  const chatRoom = useChatRoom();

  return (
    <Flex
      flexDir="column"
      p="1rem 2rem"
      border="1px"
      borderColor="#6EFA96"
      borderRightRadius="6px"
      w="25%"
      gap="1rem"
    >
      <Box>
        <Heading color="white">users infos</Heading>
      </Box>

      {chatRoom ? (
        <Box h="100%">
          <Flex
            gap="1rem"
            alignItems="center"
            justifyContent="center"
            color="white"
          >
            <Avatar src={session.user.image ?? ""} />
            <Text fontWeight="bold" isTruncated>
              {session.user.email}
            </Text>
          </Flex>
        </Box>
      ) : null}
    </Flex>
  );
}
