import { Center, Image } from "@chakra-ui/react";

const Badge = ({ path, bgColor = "#2b2c34" }) => {
  return (
    <Center py={"5em"} w={"100%"} bgColor={bgColor}>
      <Image src={path} boxSize={"sm"} alt="drink badge" />
    </Center>
  );
};

export default Badge;
