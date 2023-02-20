import { Center, Image } from "@chakra-ui/react";

const Badge = ({ path }) => {
  return (
    <Center w={"100%"} py={"5em"}>
      <Image src={path} boxSize={"sm"} alt="drink badge" />
    </Center>
  );
};

export default Badge;