import { Box } from "@chakra-ui/react";
export default function IDX() {
  return (
    <Box h={"100vh"}>
      <Box
        as="iframe"
        src="https://sef.mlsmatrix.com/Matrix/public/IDX.aspx?idx=ee201aac"
        allowfullscreen
        width="100%"
        height="100%"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
      />
    </Box>
  );
}
