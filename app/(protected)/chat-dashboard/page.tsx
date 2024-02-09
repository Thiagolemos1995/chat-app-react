import { auth } from "@/auth";
import ChatList from "./_components/ChatList";
import { Flex, Heading } from "@chakra-ui/react";
import { ChatContent } from "./_components/ChatContent";
import { Session } from "next-auth";

export default async function ChatDashboardPage() {
  const session = await auth();

  return (
    <Flex h="calc(100vh - 60px)" p="20px 100px">
      <ChatList />
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
