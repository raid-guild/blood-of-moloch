import { Center, Image } from "@chakra-ui/react";

const Label = ({ bgColor="transparent", path }) => {
  return (
    <Center w={"100%"} background={bgColor}>
      <Image
        maxW={"750px"}
        objectFit={"contain"}
        src={path}
        alt="Drink can label"
      />
    </Center>
  );
};

export default Label;
