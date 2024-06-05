import { Button } from "@chakra-ui/react";

export default function PrimaryButton({ title, icon }) {
  return (
    <Button
      rightIcon={icon}
      rounded="3xl"
      style={{ textDecoration: "none" }}
      border={"none"}     
      color={"white"}
      bg={"brand.primary"}
      _hover={{
        bg: "brand.secondary",
      }}
    >
      {title}
    </Button>
  );
}
