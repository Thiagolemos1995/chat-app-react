"use client";

import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuMessageSquareDashed } from "react-icons/lu";
import { RiChatOffLine } from "react-icons/ri";
import moment from "moment";
import { useChatRoomData } from "@/store/chatRoomData.actions";
import { setNewMessage, useMessages } from "@/store/messages.action";
import { Session } from "next-auth";

export type MessageType = {
  id: string;
  user: {
    image: string | null;
    email: string | null;
  };
  message: string;
  chatRoomId: string;
  createdAt: string;
};

interface ChatContentProps {
  readonly session: Session;
}

export function ChatContent({ session }: ChatContentProps) {
  const chatRoom = useChatRoomData();
  const messages = useMessages();

  const [typeMessage, setTypeMessage] = useState("");

  async function handleTypeMessage(typedMessage: string) {
    setNewMessage({
      id: Math.random().toString(),
      chatRoomId: chatRoom?.id ?? "",
      createdAt: moment(new Date()).format("DD/MM/YYYY HH:mm"),
      message: typeMessage,
      user: {
        email: session?.user.email ?? "",
        image: session?.user.image ?? "",
      },
    });
  }

  return (
    <Flex
      flexDir="column"
      p="1rem 2rem"
      border="1px"
      borderColor="#6EFA96"
      w="50%"
    >
      {chatRoom ? (
        <>
          <Box>
            <Heading color="white">{chatRoom?.title}</Heading>
          </Box>
          <Box h="100%">
            {messages.length <= 0 ? (
              <VStack h="100%" justifyContent="center" color="white">
                <LuMessageSquareDashed size="120px" />
                <Text fontWeight="bold" fontSize="2.5rem">
                  No messages yet
                </Text>
                <Text fontSize="1.2rem"> Start chat right now</Text>
              </VStack>
            ) : (
              <Flex
                h="100%"
                py="3rem"
                flexDir="column"
                justifyContent="end"
                alignItems="end"
              >
                {messages.length > 0
                  ? messages.map((message) => (
                      <Flex flexDir="column" key={message.id} my="1rem">
                        <Flex gap="1rem" alignItems="center">
                          {message.user.image ? (
                            <Avatar size="lg" src={message.user.image} />
                          ) : null}
                          <Flex
                            flexDir="column"
                            mb="0.3rem"
                            gap="0.1rem"
                            backgroundColor="green.100"
                            p="1rem"
                            minW="250px"
                            borderRadius="32px"
                          >
                            <Text fontWeight="bold">{message.user.email}</Text>
                            <Text>{message.message}</Text>
                            <Flex justifyContent="end">
                              <Text fontSize="0.7rem" fontWeight="bold">
                                {moment(message.createdAt).format(
                                  "DD/MM/YYYY hh:mm"
                                )}
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                    ))
                  : null}
              </Flex>
            )}
          </Box>
          <Box>
            <InputGroup>
              <Input
                placeholder="Enter your message here"
                color="white"
                focusBorderColor="#6EFA96"
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                    handleTypeMessage(typeMessage);
                  }
                }}
                onInput={(ev) =>
                  setTypeMessage((ev.target as HTMLInputElement).value)
                }
              />
              <InputRightElement>
                <Button
                  variant="ghost"
                  borderRadius="full"
                  _hover={{ backgroundColor: "#80BA91" }}
                  onClick={() => handleTypeMessage(typeMessage)}
                >
                  <ArrowRightIcon color="green.500" />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </>
      ) : (
        <VStack h="100%" justifyContent="center" color="white">
          <RiChatOffLine size="120px" />
          <Text fontWeight="bold" fontSize="2.5rem">
            No chat room selected
          </Text>
        </VStack>
      )}
    </Flex>
  );
}
