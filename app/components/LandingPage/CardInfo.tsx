import {
  Card,
  CardBody,
  CardHeader,
  Fade,
  Heading,
  Text,
} from "@chakra-ui/react";

interface CardInfoProps {
  readonly header: string;
  readonly children: React.ReactNode;
}

export default function CardInfo({ children, header }: CardInfoProps) {
  return (
    <Fade in>
      <Card
        backgroundColor="transparent"
        color="#0AC77C"
        border="1px"
        borderColor="#0AC77C"
        boxShadow=" 1px 1px 8px #0AC77C"
        maxW="400px"
        minH="300px"
      >
        <CardHeader>
          <Heading size="md">{header}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{children}</Text>
        </CardBody>
      </Card>
    </Fade>
  );
}
