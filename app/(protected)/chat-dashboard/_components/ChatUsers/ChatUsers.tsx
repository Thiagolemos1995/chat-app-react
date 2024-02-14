"use client";

import { Session } from "next-auth";

import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";
import { InviteNewUser } from "./InviteNewUser";

import { useChatRoomData } from "@/store/chatRoomData.actions";
import { setNewRoomUser, useUsersListById } from "@/store/userList.actions";
import { useEffect } from "react";
import { User } from "../ChatList/ChatList";
import { setActiveUser } from "@/store/activeUser.actions";

export type ChatRoomUser = User & {
  chatRoomId: string;
};

interface ChatUsersProps {
  readonly session: Session;
}

export function ChatUsers({ session }: ChatUsersProps) {
  const chatRoom = useChatRoomData();
  const usersList = useUsersListById(chatRoom?.id ?? "");

  useEffect(() => {
    setActiveUser({
      name: session?.user?.name ?? "",
      email: session?.user?.email ?? "",
      image: session?.user?.image ?? "",
    });
  }, []);

  useEffect(() => {
    setNewRoomUser({
      name: session?.user?.name ?? "",
      email: session?.user?.email ?? "",
      chatRoomId: chatRoom?.id ?? "",
      image: session?.user?.image ?? "",
    });
  }, [usersList]);

  return (
    <Flex
      maxH="830px"
      flexDir="column"
      p="1rem 2rem"
      border="1px"
      borderColor="#6EFA96"
      borderRightRadius="6px"
      w="25%"
      gap="1rem"
    >
      <Flex justifyContent="space-between">
        <Heading color="white">users infos</Heading>

        {chatRoom ? <InviteNewUser chatRoomId={chatRoom?.id ?? ""} /> : null}
      </Flex>

      {chatRoom ? (
        <Flex h="100%" flexDir="column" gap="1rem">
          <Flex
            gap="1rem"
            alignItems="center"
            color="white"
            _hover={{ cursor: "pointer " }}
            onClick={() =>
              setActiveUser({
                id: session?.user.id ?? "",
                email: session?.user?.email ?? "",
                name: session?.user?.name ?? "",
                image: session?.user?.image ?? "",
              })
            }
          >
            <Avatar src={session?.user?.image ?? ""} />
            <Text fontWeight="bold" isTruncated>
              {session?.user?.email}
            </Text>
          </Flex>
          {usersList
            ? usersList.map((user) => (
                <Flex
                  key={user.id}
                  gap="1rem"
                  alignItems="center"
                  _hover={{ cursor: "pointer " }}
                  color="white"
                  onClick={() => {
                    console.log(user);
                    setActiveUser({
                      id: user.id,
                      email: user.email,
                      name: user.name,
                      image: user?.image ?? "",
                    });
                  }}
                >
                  <Avatar src={user.image ?? ""} />
                  <Text fontWeight="bold" isTruncated>
                    {user.email}
                  </Text>
                </Flex>
              ))
            : null}
        </Flex>
      ) : null}
    </Flex>
  );
}
