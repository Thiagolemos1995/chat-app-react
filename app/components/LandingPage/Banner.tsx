"use client";

import { Button, Fade, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LOGO_HEIGHT = 450;
const LOGO_WIDTH = 650;

export default function Banner() {
  const router = useRouter();

  return (
    <Fade in>
      <Flex
        bgGradient="linear(to-br, #0D0D0D, #2D2D2D)"
        h="500px"
        p="1rem 6rem"
        mx="5px"
        borderBottomRadius="8px"
        justifyContent="space-between"
        boxShadow=" 1px 6px 8px #2D2D2D"
      >
        <Flex flexDir="column" maxW="700px" justifyContent="center" gap="2rem">
          <Heading color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Heading>
          <Text color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            tristique ante quis consectetur efficitur. Quisque blandit feugiat
            eros, vitae congue metus laoreet quis. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Morbi ac congue urna, non commodo
            nisi. In in neque vel lorem fringilla posuere non a tellus. urna.
          </Text>

          <Flex gap="50px">
            <Button
              size="lg"
              backgroundColor="#6EFA96"
              _hover={{ backgroundColor: "#0AC77C" }}
              color="#0D0D0D"
              onClick={() => router.push("/auth/register")}
            >
              Sign up
            </Button>
            <Button
              variant="ghost"
              _hover={{ backgroundColor: "#0AC77C" }}
              size="lg"
              color="#6EFA96"
              onClick={() => router.push("/auth/login")}
            >
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
  );
}
