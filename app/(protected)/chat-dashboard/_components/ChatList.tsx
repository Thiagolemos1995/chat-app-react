"use client";

import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import NewChatRoom from "./NewChatRoom";
import { useChatRoom } from "@/store/chatRoom.actions";
import { setChatRoomData } from "@/store/chatRoomData.actions";

export interface User {
  id: string;
  email: string;
  image?: string;
}

export interface ChatRoom {
  id: string;
  title: string;
  description: string;
}

export default function ChatList() {
  const chatRooms = useChatRoom();

  async function handleSelectChatRoom(chatRoomData: ChatRoom) {
    setChatRoomData(chatRoomData);
  }

  return (
    <Flex
      minH="100%"
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

      {chatRooms
        ? chatRooms.map((chat) => (
            <Button
              variant="ghost"
              key={chat.id}
              textAlign="start"
              justifyContent="start"
              py="2rem"
              _hover={{ backgroundColor: "#80BA91" }}
              onClick={() => handleSelectChatRoom(chat)}
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
