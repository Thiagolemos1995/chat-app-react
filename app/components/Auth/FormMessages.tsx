"use client";

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

interface FormMessagesProps {
  readonly type: "error" | "success" | "warning" | "info";
  readonly title?: string;
  readonly message?: string;
}

export default function FormMessages({
  type,
  title,
  message,
}: FormMessagesProps) {
  if (!message) return null;

  return (
    <Alert status={type}>
      <AlertIcon />
      {title && <AlertTitle>{title}</AlertTitle>}
      {message && <AlertDescription>{message}</AlertDescription>}
    </Alert>
  );
}
