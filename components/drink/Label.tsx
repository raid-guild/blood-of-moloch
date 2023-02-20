import { Image } from "@chakra-ui/react";

const Label = ({ path }) => {
  return (
    <Image w={"100%"} objectFit={"contain"} src={path} alt="Drink can label" />
  );
};

export default Label;
