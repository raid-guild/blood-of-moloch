import {
  Box,
  Heading,
  Text,
  Flex,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";

const BeerInfo = ({ bgColor, copy }) => {
  return (
    <Flex background={bgColor} py={"5em"} w={"100%"}>
      <HStack w={"60%"} ml={"3em"}>
        <Box style={{ fontFamily: `'futura-pt', sans-serif` }}>
          <Heading fontFamily={theme.fonts.uncial}>
            {copy.name.toUpperCase()}
          </Heading>
          <Text w={"70%"} textAlign={"left"}>
            {copy.beer}
          </Text>
        </Box>
      </HStack>
      <Divider orientation="vertical" />
      <HStack>
        <VStack>
          <Heading sx={{ fontFamily: `'futura-pt', sans-serif` }}>ABV</Heading>
          <Text
            sx={{
              fontSize: `40px`,
              fontFamily: `'futura-pt', sans-serif`,
              fontWeight: `200`,
              color: `#898989`,
            }}
          >
            {`${copy.traits.abv} %`}
          </Text>
        </VStack>
        <div
          style={{
            display: `block`,
            height: `100px`,
            width: `2px`,
            backgroundColor: `#EBEBEB`,
          }}
        ></div>
        <div>
          <Heading sx={{ fontFamily: `'futura-pt', sans-serif` }}>IBU</Heading>
          <Text
            sx={{
              fontSize: `40px`,
              fontFamily: `'futura-pt', sans-serif`,
              fontWeight: `200`,
              color: `#898989`,
            }}
          >
            {copy.traits.ibu}
          </Text>
        </div>
      </HStack>
    </Flex>
  );
};

export default BeerInfo;
