import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      {/*  <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}
          strategy="beforeInteractive"
  />*/}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
