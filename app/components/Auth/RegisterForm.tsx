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
import FormMessages from "./FormMessages";
import Social from "./Social";

import { RegisterSchema } from "@/schemas";
import {
  MessageResponseType,
  register as registerServer,
} from "@/actions/register";

export default function RegisterForm() {
  const [validateResponse, setValidateResponse] = useState<MessageResponseType>(
    { type: "info", message: "" }
  );
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    await registerServer(values).then((data: MessageResponseType) => {
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
            <FormControl isInvalid={!!errors.username}>
              <FormLabel
                htmlFor="email"
                fontSize="1.2rem"
                fontWeight="bold"
                mb="0.5rem"
              >
                Email
              </FormLabel>
              <Input
                id="username"
                variant="flushed"
                size="lg"
                placeholder="E-mail"
                focusBorderColor="#6EFA96"
                disabled={isSubmitting}
                {...register("email")}
              />
              {errors.email && (
                <FormErrorMessage>{errors.email.message}</FormErrorMessage>
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

          <GridItem colSpan={2}>
            <FormControl isInvalid={!!errors.confirmPassword}>
              <FormLabel
                htmlFor="password"
                fontSize="1.2rem"
                fontWeight="bold"
                mb="0.5rem"
              >
                Confirm Password
              </FormLabel>
              <Input
                id="confirmPassword"
                variant="flushed"
                size="lg"
                placeholder="Confirm Password"
                focusBorderColor="#6EFA96"
                type="password"
                disabled={isSubmitting}
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <FormErrorMessage>
                  {errors.confirmPassword.message}
                </FormErrorMessage>
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
              Register
            </Button>
          </GridItem>

          <GridItem colSpan={2}>
            <Divider my="1rem" />

            <Flex gap="0.5rem" justifyContent="center">
              <Text>{`Already have a account?`} </Text>
              <Link href="/auth/login">
                <Text
                  fontWeight="bold"
                  color="#0AC77C"
                  _hover={{ textDecoration: "underline" }}
                >
                  Sign in here
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
