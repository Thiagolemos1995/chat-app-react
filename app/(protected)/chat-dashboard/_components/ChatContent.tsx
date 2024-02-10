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
} from "@chakra-ui/react";
import { useState } from "react";
import { LuMessageSquareDashed } from "react-icons/lu";
import { RiChatOffLine } from "react-icons/ri";
import moment from "moment";
import { Session } from "next-auth";
import { useChatRoom } from "@/store/chatRoom.actions";
import { sendMessage } from "@/services/actions/sendMessage";

export type MessageType = {
  id: string;
  author: string;
  message: string;
  createdAt: Date;
};

interface ChatContentProps {
  readonly sessionData: Session;
}

export function ChatContent({ sessionData }: ChatContentProps) {
  const chatRoom = useChatRoom();

  const [typeMessage, setTypeMessage] = useState("");
  const [messageData, setMessageData] = useState<MessageType[]>([]);

  async function handleTypeMessage(typedMessage: string) {
    // await sendMessage(typedMessage, chatRoom?.id ?? "");
    setMessageData((prevMessage) => [
      ...prevMessage,
      {
        id: Math.random().toString(),
        author: sessionData.user.email ?? "",
        message: typedMessage,
        createdAt: new Date(),
      },
    ]);
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
            {messageData.length <= 0 ? (
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
                {messageData.length > 0
                  ? messageData.map((message) => (
                      <Box
                        overflow="auto"
                        key={message.id}
                        backgroundColor="green.100"
                        p="1rem"
                        minW="250px"
                        borderRadius="6px"
                        my="1rem"
                      >
                        <Flex flexDir="column" mb="1rem" gap="0.5rem">
                          <Text fontWeight="bold" fontSize="1.5rem">
                            {message.author}
                          </Text>
                          <Text>{message.message}</Text>
                        </Flex>
                        <Flex justifyContent="end">
                          <Text fontSize="0.7rem" fontWeight="bold">
                            {moment(message.createdAt).format(
                              "DD/MM/YYYY hh:mm"
                            )}
                          </Text>
                        </Flex>
                      </Box>
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
