import { Button, Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function Social() {
  return (
    <Button size="lg" w="full" onClick={() => {}}>
      <Flex gap="0.5rem">
        <FaGithub />
        Login with Github
      </Flex>
    </Button>
  );
}
