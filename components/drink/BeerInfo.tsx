import {
  Box,
  Heading,
  Text,
  Flex,
  HStack,
  VStack,
  Divider,
  Stack,
  Center,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";

type DescriptionProps = {
  name: string;
  content: string;
};

type TraitsProps = {
  ibu: number;
  abv: number;
};
const Description = ({ name, content }: DescriptionProps) => {
  return (
    <HStack minW={"250px"} w={"100%"} ml={"3em"}>
      <Box>
        <Heading fontFamily={theme.fonts.uncial}>{name.toUpperCase()}</Heading>
        <Text
          w={"100%"}
          textAlign={"left"}
          fontFamily={{ fontFamily: `'futura-pt', sans-serif` }}
        >
          {content}
        </Text>
      </Box>
    </HStack>
  );
};

const Traits = ({ ibu, abv }: TraitsProps) => {
  const style = {
    heading: {
      fontFamily: `'futura-pt', sans-serif`,
    },
    divider: {
      display: `block`,
      height: `100px`,
      width: `2px`,
      backgroundColor: `#EBEBEB`,
    },
    data: {
      fontSize: `40px`,
      fontFamily: `'futura-pt', sans-serif`,
      fontWeight: `200`,
      color: `#898989`,
    },
  };

  return (
    <HStack minW={"250px"} justifyContent={"center"}>
      <VStack>
        <Heading sx={style.heading}>ABV</Heading>
        <Text sx={style.data}>{`${abv} %`}</Text>
      </VStack>
      <div style={style.divider}></div>
      <VStack>
        <Heading sx={style.heading}>IBU</Heading>
        <Text sx={style.data}>{ibu}</Text>
      </VStack>
    </HStack>
  );
};

const BeerInfo = ({ bgColor, copy }) => {
  return (
    <Center background={bgColor}>
      <Stack direction={["column", "row"]} justifyContent={"center"} py={"5em"} maxW={"750px"}>
        <Description name={copy.name} content={copy.beer} />
        <Divider orientation="vertical" />
        <Traits ibu={copy.traits.ibu} abv={copy.traits.abv} />
      </Stack>
    </Center>
  );
};

export default BeerInfo;
