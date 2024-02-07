import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Fade,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const LOGO_HEIGHT = 450;
const LOGO_WIDTH = 650;

export default function Home() {
  return (
    <main>
      <Flex h="calc(100vh - 60px)" flexDir="column">
        <Fade in>
          <Flex
            bgGradient="linear(to-br, #0D0D0D, #2D2D2D)"
            h="500px"
            p="1rem 6rem"
            borderBottomRadius="8px"
            justifyContent="space-between"
          >
            <Flex
              flexDir="column"
              maxW="700px"
              justifyContent="center"
              gap="2rem"
            >
              <Heading color="white">
                If you are looking to know or chat with your friends, here is
                the place.
              </Heading>
              <Text color="white">
                Join a huge community, to meet and chat with lots of people, in
                a simple and fast way
              </Text>

              <Flex gap="50px">
                <Button
                  size="lg"
                  backgroundColor="#6EFA96"
                  _hover={{ backgroundColor: "#0AC77C" }}
                  color="#0D0D0D"
                >
                  Sign up
                </Button>
                <Button variant="ghost" size="lg" color="#6EFA96">
                  Sign in
                </Button>
              </Flex>
            </Flex>

            <VStack maxW="700px">
              <Image
                src="/chat_app.png"
                alt="chat app"
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
              />
            </VStack>
          </Flex>
        </Fade>
      </Flex>
    </main>
  );
}
