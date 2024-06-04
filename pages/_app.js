// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { fonts } from "@/lib/fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-montserrat: ${fonts.montserrat.style.fontFamily};
          }
          .stickyElem {
            transition: all 1s ease;
            height: 100%;
          }
          .zoom {
            transition: all 1s ease;
          }
          .zoom:hover {
            transform: scale(
              1.5
            ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
          }
        `}
      </style>
      <ChakraProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
