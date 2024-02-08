"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  IconButton,
  Grid,
  GridItem,
  Input,
  Text,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Social from "./Social";
import FormMessages from "./FormMessages";

import { LoginSchema } from "@/schemas";
import { MessageResponseType, login } from "@/services/actions/login";

export default function LoginForm() {
  const [validateResponse, setValidateResponse] = useState<MessageResponseType>(
    { type: "info", message: "" }
  );
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    await login(values).then((data: MessageResponseType) => {
      setValidateResponse(data);
    });
    reset();
  }

  return (
    <Card>
      <CardHeader>
        <Flex alignItems="center">
          <IconButton
            variant="ghost"
            aria-label="return"
            onClick={() => router.replace("/")}
          >
            <ArrowBackIcon h="1.5rem" w="1.5rem" />
          </IconButton>
          <Heading size="lg" ml="20px">
            Sign in
          </Heading>
        </Flex>
      </CardHeader>

      <CardBody w="400px">
        <Grid
          as="form"
          templateColumns="repeat(2, 1fr)"
          gap="20px"
          onSubmit={handleSubmit(onSubmit)}
        >
          <GridItem colSpan={2}>
            <FormControl isInvalid={!!errors.username}>
              <FormLabel
                htmlFor="username"
                fontSize="1.2rem"
                fontWeight="bold"
                mb="0.5rem"
              >
                Username
              </FormLabel>
              <Input
                id="username"
                variant="flushed"
                size="lg"
                placeholder="Username"
                focusBorderColor="#6EFA96"
                disabled={isSubmitting}
                {...register("username")}
              />
              {errors.username && (
                <FormErrorMessage>{errors.username.message}</FormErrorMessage>
              )}
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel
                htmlFor="password"
                fontSize="1.2rem"
                fontWeight="bold"
                mb="0.5rem"
              >
                Password
              </FormLabel>
              <Input
                id="password"
                variant="flushed"
                size="lg"
                placeholder="Password"
                focusBorderColor="#6EFA96"
                type="password"
                disabled={isSubmitting}
                {...register("password")}
              />
              {errors.password && (
                <FormErrorMessage>{errors.password.message}</FormErrorMessage>
              )}
            </FormControl>
          </GridItem>

          <GridItem colSpan={2} mt="1rem">
            <FormMessages
              type={validateResponse.type}
              message={validateResponse.message}
            />
          </GridItem>

          <GridItem colSpan={2} mt="1rem">
            <Button
              type="submit"
              w="full"
              size="lg"
              backgroundColor="#6EFA96"
              _hover={{ backgroundColor: "#0AC77C" }}
              color="#0D0D0D"
              isLoading={isSubmitting}
            >
              Login
            </Button>
          </GridItem>

          <GridItem colSpan={2}>
            <Divider my="1rem" />

            <Flex gap="0.5rem" justifyContent="center">
              <Text>{`Don't have a account?`} </Text>
              <Link href="/auth/register">
                <Text
                  fontWeight="bold"
                  color="#0AC77C"
                  _hover={{ textDecoration: "underline" }}
                >
                  Sign up here
                </Text>
              </Link>
            </Flex>
          </GridItem>

          <GridItem colSpan={2}>
            <Divider my="1rem" />
            <Social />
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
}
