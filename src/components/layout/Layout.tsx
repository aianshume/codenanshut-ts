import { Box, CSSObject } from "@chakra-ui/react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  styles?: CSSObject | undefined;
};

export function Layout({ children, styles }: LayoutProps) {
  return (
    <Box py={28} sx={styles}>
      {children}
    </Box>
  );
}
