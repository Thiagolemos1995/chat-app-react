"use client";

import { useChatRoom } from "@/store/chatRoom.actions";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import NewChatRoom from "./NewChatRoom";

export interface User {
  id: string;
  email: string;
  image?: string;
}

export interface ChatRoom {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  users?: User[];
}

export default function ChatList() {
  const chatList = useChatRoom();

  return (
    <Flex
      h="100%"
      overflow="auto"
      flexDir="column"
      w="25%"
      border="1px"
      borderColor="#6EFA96"
      borderLeftRadius="6px"
      p="1rem 2rem"
      gap="1rem"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#6EFA96",
          borderRadius: "24px",
        },
      }}
    >
      <Flex justifyContent="space-between">
        <Heading color="white" mb="1rem">
          Chats
        </Heading>

        <NewChatRoom />
      </Flex>

      {chatList
        ? chatList.map((chat) => (
            <Button
              variant="ghost"
              key={chat.id}
              textAlign="start"
              justifyContent="start"
              py="2rem"
              _hover={{ backgroundColor: "#80BA91" }}
            >
              <Flex flexDir="column" gap="0.5rem">
                <Text fontSize="1.2rem" fontWeight="bold" color="white">
                  {chat.title}
                </Text>
                <Text fontSize="0.7rem" fontWeight="100" color="white">
                  {chat.description}
                </Text>
              </Flex>
            </Button>
          ))
        : null}
    </Flex>
  );
}
