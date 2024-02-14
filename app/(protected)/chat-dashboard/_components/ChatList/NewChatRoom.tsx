"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Box,
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
import { RiChatNewLine } from "react-icons/ri";

import { addChatRoom, useChatRoom } from "@/store/chatRoom.actions";
import { NewChatRoomSchema } from "@/schemas";
import FormMessages from "@/app/components/Auth/FormMessages";
import { useState } from "react";
import { MessageResponseType } from "@/services/actions/login";

export default function NewChatRoom() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const chatRooms = useChatRoom();
  const [formMessage, setFormMessage] = useState<MessageResponseType>({
    type: "error",
    message: "",
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof NewChatRoomSchema>>({
    resolver: zodResolver(NewChatRoomSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function handleOpen() {
    reset();
    setFormMessage({ type: "error", message: "" });
    onOpen();
  }

  async function onSubmit(chatRoomData: z.infer<typeof NewChatRoomSchema>) {
    const existingChatRoom = chatRooms.find(
      (chatRoom) => chatRoom.title === chatRoomData.title
    );

    if (existingChatRoom)
      return setFormMessage({
        type: "error",
        message: "This room already exists!",
      });

    addChatRoom({
      id: Math.random().toString(),
      title: chatRoomData.title,
      description: chatRoomData.description,
    });
    reset();
    onClose();
  }

  return (
    <>
      <Box>
        <Tooltip label="New Chat Room">
          <Button
            backgroundColor="#6EFA96"
            _hover={{ backgroundColor: "#80BA91" }}
            onClick={onOpen}
          >
            <RiChatNewLine />
          </Button>
        </Tooltip>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>New Chat Room</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap="20px"
              onSubmit={handleSubmit(onSubmit)}
            >
              <GridItem colSpan={2}>
                <FormControl isInvalid={!!errors.title}>
                  <FormLabel
                    htmlFor="title"
                    fontSize="1.2rem"
                    fontWeight="bold"
                    mb="0.5rem"
                  >
                    Title
                  </FormLabel>
                  <Input
                    id="title"
                    variant="flushed"
                    size="lg"
                    placeholder="Title"
                    focusBorderColor="#6EFA96"
                    disabled={isSubmitting}
                    {...register("title")}
                  />
                  {errors.title && (
                    <FormErrorMessage>{errors.title.message}</FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl isInvalid={!!errors.description}>
                  <FormLabel
                    htmlFor="description"
                    fontSize="1.2rem"
                    fontWeight="bold"
                    mb="0.5rem"
                  >
                    Description
                  </FormLabel>
                  <Input
                    id="description"
                    variant="flushed"
                    size="lg"
                    placeholder="Description"
                    focusBorderColor="#6EFA96"
                    type="description"
                    disabled={isSubmitting}
                    {...register("description")}
                  />
                  {errors.description && (
                    <FormErrorMessage>
                      {errors.description.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormMessages
                  type={formMessage.type}
                  message={formMessage.message}
                />
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
                Create
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
