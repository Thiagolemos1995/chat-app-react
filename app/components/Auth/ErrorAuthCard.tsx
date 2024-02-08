"use client";

import { useRouter } from "next/navigation";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function ErrorAuthCard() {
  const router = useRouter();

  return (
    <Card>
      <CardHeader>
        <Flex alignItems="center">
          <Heading size="md" ml="20px">
            Oops! Something went wrong!
          </Heading>
        </Flex>
      </CardHeader>

      <CardBody w="400px">
        <Grid>
          <GridItem colSpan={2} mt="1rem">
            <Button
              w="full"
              size="lg"
              backgroundColor="#6EFA96"
              _hover={{ backgroundColor: "#0AC77C" }}
              color="#0D0D0D"
              onClick={() => router.replace("/auth/login")}
            >
              Back to Login
            </Button>
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
}
