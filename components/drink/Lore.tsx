import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";

type LoreProps = {
  first: string;
  second: string;
  bgColor: string;
};
const Lore = ({ first, second, bgColor }: LoreProps) => {
  return (
    <Center bgColor={bgColor} w={"100%"}>
      <VStack maxW={"750px"} py={"5em"}>
        <Heading textAlign={"left"}>Lore</Heading>
        <Box w={"70%"}>
          <Text w={"100%"}>{first}</Text>
          <br />
          <Text w={"100%"}>{second}</Text>
        </Box>
      </VStack>
    </Center>
  );
};

export default Lore;
