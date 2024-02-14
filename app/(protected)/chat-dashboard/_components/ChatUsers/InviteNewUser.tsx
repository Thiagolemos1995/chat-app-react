"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";

import { InviteNewUserSchema } from "@/schemas";
import { setNewRoomUser } from "@/store/userList.actions";

interface InviteNewUserProps {
  readonly chatRoomId: string;
}

export function InviteNewUser({ chatRoomId }: InviteNewUserProps) {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof InviteNewUserSchema>>({
    resolver: zodResolver(InviteNewUserSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(userData: z.infer<typeof InviteNewUserSchema>) {
    setNewRoomUser({
      name: userData.name,
      email: userData.email,
      chatRoomId,
    });
    reset();
    onClose();
  }

  return (
    <>
      <Tooltip label="Invite new user">
        <Button
          borderRadius="full"
          backgroundColor="#6EFA96"
          _hover={{ backgroundColor: "#80BA91" }}
          onClick={onOpen}
        >
          <Flex alignItems="center" gap="1rem">
            <AddIcon />
          </Flex>
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Invite New User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap="20px"
              onSubmit={handleSubmit(onSubmit)}
            >
              <GridItem colSpan={2}>
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel
                    htmlFor="name"
                    fontSize="1.2rem"
                    fontWeight="bold"
                    mb="0.5rem"
                  >
                    Name
                  </FormLabel>
                  <Input
                    id="name"
                    variant="flushed"
                    size="lg"
                    placeholder="Name"
                    focusBorderColor="#6EFA96"
                    disabled={isSubmitting}
                    {...register("name")}
                  />
                  {errors.name && (
                    <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel
                    htmlFor="email"
                    fontSize="1.2rem"
                    fontWeight="bold"
                    mb="0.5rem"
                  >
                    E-mail
                  </FormLabel>
                  <Input
                    id="email"
                    variant="flushed"
                    size="lg"
                    placeholder="E-mail"
                    focusBorderColor="#6EFA96"
                    type="email"
                    disabled={isSubmitting}
                    {...register("email")}
                  />
                  {errors.email && (
                    <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Flex w="full" gap="1rem">
              <Button
                w="full"
                variant="ghost"
                _hover={{ backgroundColor: "#0AC77C" }}
                color="#2D2D2D"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                w="full"
                backgroundColor="#6EFA96"
                _hover={{ backgroundColor: "#0AC77C" }}
                color="#0D0D0D"
                type="submit"
              >
                Invite
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
