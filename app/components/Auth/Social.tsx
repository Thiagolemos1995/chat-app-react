import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Button, Flex } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Social() {
  function handleProviderLogin(provider: "google" | "github") {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
    <Flex gap="1rem">
      <Button
        size="lg"
        w="full"
        variant="ghost"
        onClick={() => handleProviderLogin("google")}
      >
        <Flex gap="0.5rem">
          <FcGoogle size="2rem" />
        </Flex>
      </Button>
      <Button
        size="lg"
        w="full"
        variant="ghost"
        onClick={() => handleProviderLogin("github")}
      >
        <Flex gap="0.5rem">
          <FaGithub size="2rem" />
        </Flex>
      </Button>
    </Flex>
  );
}
