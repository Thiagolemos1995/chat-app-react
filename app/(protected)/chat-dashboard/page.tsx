import { auth } from "@/auth";
import { Session } from "next-auth";

import { Flex } from "@chakra-ui/react";
import { ChatList } from "./_components/ChatList/ChatList";
import { ChatContent } from "./_components/ChatContent/ChatContent";
import { ChatUsers } from "./_components/ChatUsers/ChatUsers";

export default async function ChatDashboardPage() {
  const session = await auth();

  return (
    <Flex minH="calc(100vh - 60px)" p="20px 100px">
      <ChatList sessionData={session as Session} />
      <ChatContent session={session as Session} />
      <ChatUsers session={session as Session} />
    </Flex>
  );
}
