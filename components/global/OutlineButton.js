import { Button } from "@chakra-ui/react";
import React from "react";

export default function OutlineButton({ title, icon,  onClick }) {
  return (
    <Button
 
      rounded="3xl"
      rightIcon={icon}
      variant={"outline"}
      color={"brand.primary"}
      borderColor={"brand.primary"}
      _hover={{
        color: "brand.secondary",
        borderColor: "brand.secondary",
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
