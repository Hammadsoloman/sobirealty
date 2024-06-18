import { Button } from "@chakra-ui/react";

export default function PrimaryButton({ title, icon,isDisabled=false,onClick ,type="button"}) {
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
      onClick={onClick}
      isDisabled={isDisabled}
      type={type}
    >
      {title}
    </Button>
  );
}
