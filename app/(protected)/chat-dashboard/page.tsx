import { auth } from "@/auth";
import ChatList from "./_components/ChatList";
import { Flex, Heading } from "@chakra-ui/react";
import { ChatContent } from "./_components/ChatContent";
import { Session } from "next-auth";
import { getChatRooms } from "@/services/chatRooms";

async function fetchChatRooms() {
  return await getChatRooms().then((response) => response);
}

export default async function ChatDashboardPage() {
  const session = await auth();
  const chatList = await fetchChatRooms();

  // await fetchMessagesByRoom("clsfdukbd0000h91m4y6zmjgz").then((response) =>
  //   console.log(response)
  // );

  return (
    <Flex h="calc(100vh - 60px)" p="20px 100px">
      <ChatList chatRooms={chatList as any} />
      <ChatContent sessionData={session as Session} />
      <Flex
        p="1rem 2rem"
        border="1px"
        borderColor="#6EFA96"
        borderRightRadius="6px"
        w="25%"
      >
        <Heading color="white">users infos</Heading>
      </Flex>
    </Flex>
  );
}
