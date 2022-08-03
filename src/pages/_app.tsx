import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import theme from "lib/theme";
import { prismLightTheme, prismDarkTheme } from "utils/prism";
import { Global, css } from "@emotion/react";
import { Loader, Navbar, Footer } from "components";

const GlobalStyle = ({ children }: any) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Loader />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
