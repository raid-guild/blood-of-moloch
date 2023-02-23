import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

type LoreProps = {
  first: string;
  second: string;
};
const Lore = ({ first, second }: LoreProps) => {
  return (
    <Center w={"100%"} bgColor={"black"}>
      <VStack maxW={"750px"} py={"5em"}>
        <Heading fontFamily={theme.fonts.uncial} textAlign={"left"}>
          Lore
        </Heading>
        <Box w={"70%"}>
          <Text
            w={"100%"}
            textAlign={"left"}
            fontFamily={{ fontFamily: `'futura-pt', sans-serif` }}
          >
            {first}
          </Text>
          <br />
          <Text
            w={"100%"}
            textAlign={"left"}
            fontFamily={{ fontFamily: `'futura-pt', sans-serif` }}
          >
            {second}
          </Text>
        </Box>
      </VStack>
    </Center>
  );
};

export default Lore;
