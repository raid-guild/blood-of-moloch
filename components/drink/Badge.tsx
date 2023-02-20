import { Center, Image } from "@chakra-ui/react";

const Badge = ({ badge }) => {
  return (
    <Center w={"100%"} py={"5em"}>
      <Image src={badge} boxSize={"sm"} alt="drink badge" />
    </Center>
  );
};

export default Badge;
