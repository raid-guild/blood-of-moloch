import { Image } from "@chakra-ui/react";

const Label = (props) => {
  return (
    <Image
      w={"100%"}
      objectFit={"contain"}
      src={props.label}
      alt="Drink can label"
    />
  );
};

export default Label;
