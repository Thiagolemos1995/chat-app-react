import { auth } from "@/auth";
import ChatList from "./_components/ChatList";
import { Flex } from "@chakra-ui/react";
import { ChatContent } from "./_components/ChatContent";
import { Session } from "next-auth";
import ChatUsers from "./_components/ChatUsers";

export default async function ChatDashboardPage() {
  const session = await auth();

  return (
    <Flex minH="calc(100vh - 60px)" p="20px 100px">
      <ChatList />
      <ChatContent session={session as Session} />
      <ChatUsers session={session as Session} />
    </Flex>
  );
}
