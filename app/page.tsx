import { Flex } from "@chakra-ui/react";
import Banner from "./components/LandingPage/Banner";

export default function Home() {
  return (
    <main>
      <Flex h="calc(100vh - 60px)" flexDir="column">
        <Banner />
      </Flex>
    </main>
  );
}
