import { Center, Image } from "@chakra-ui/react";

const Badge = (props) => {
  return (
    <Center w={"100%"} py={"5em"}>
      <Image src={props.badge} boxSize={"md"} alt="drink badge" />
    </Center>
  );
};

export default Badge;
