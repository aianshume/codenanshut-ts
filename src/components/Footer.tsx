import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import siteConfig from "configs/config";
import Link from "next/link";
import { ReactNode } from "react";

interface SocialButtonProps {
  children: ReactNode;
  label: string;
  href: string;
}

const SocialButton = ({ children, label, href }: SocialButtonProps) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer: React.FC = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={12}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack
          justifyContent={"center"}
          direction={"row"}
          spacing={6}
          flexWrap="wrap"
        >
          <a href="https://docs.codenanshu.in">Docs</a>
          <a
            href={
              "https://cute-stage-771.notion.site/91c186558f9c49888f3c01dd04530581?v=2ac057e75feb46f1af00d8ffe35ceb26"
            }
          >
            Books Notes
          </a>
          <a href={"#"}>Analytics</a>
          <Link href={"/guestbook"}>GuestBook</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>{siteConfig.copyright}</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={siteConfig.author.twitter}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={siteConfig.youtube}>
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={siteConfig.author.instagram}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
