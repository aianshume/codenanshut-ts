import {
  VStack,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Link as RLink,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Blogcard.module.css";
import { CardProps } from "./cardProps";

export function Blogcard({
  image,
  title,
  description,
  category,
  link,
}: CardProps): JSX.Element {
  return (
    <VStack
      p={2}
      bgColor={useColorModeValue("gray.100", "gray.900")}
      spacing={6}
      alignItems="flex-start"
      borderRadius={10}
      sx={{
        _hover: {
          outline: "solid 2px",
          outlineOffset: "5px",
          outlineColor: useColorModeValue("gray.300", "white"),
          transition: "all 0.6s",
        },
      }}
    >
      <Box w={"100%"}>
        <Link href={`/${category}/${link}`} passHref>
          <Image
            width={640}
            height={360}
            objectFit="cover"
            src={image}
            alt="Article"
          />
        </Link>
      </Box>
      <Box p={3} pt={2}>
        <Link href={`/${category}/${link}`} passHref>
          <RLink>
            <Heading className={styles.pointer} as="h5" fontSize={20}>
              {title}
            </Heading>
          </RLink>
        </Link>
        <Text color={useColorModeValue("gray.600", "gray.300")} mt={3}>
          <RLink>{description}</RLink>
        </Text>
      </Box>
    </VStack>
  );
}
