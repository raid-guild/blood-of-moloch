import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";

type LoreProps = {
  first: string;
  second: string;
};
const Lore = ({ first, second }: LoreProps) => {
  return (
    <Center bgColor={"black"}>
      <VStack maxW={"750px"} py={"5em"}>
        <Heading textAlign={"left"}>Lore</Heading>
        <Box w={"70%"}>
          <Text w={"100%"} textAlign={"left"}>
            {first}
          </Text>
          <br />
          <Text w={"100%"} textAlign={"left"}>
            {second}
          </Text>
        </Box>
      </VStack>
    </Center>
  );
};

export default Lore;
