import { VStack, Heading, Text } from "@chakra-ui/react";

type ListHeadProps = {
  title: string;
  description: string;
};

export function ListHead({ title, description }: ListHeadProps): JSX.Element {
  return (
    <VStack spacing={5}>
      <Heading as="h1">{title}</Heading>
      <Text
        maxW={[300, 350, 400, 450]}
        textAlign="center"
        wordBreak={"break-word"}
      >
        {description}
      </Text>
    </VStack>
  );
}
