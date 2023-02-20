import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

type LoreProps = {
  first: string;
  second: string;
};
const Lore = ({ first, second }: LoreProps) => {
  return (
    <VStack w={"100%"} bgColor={"black"} py={"5em"}>
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
  );
};

export default Lore;
