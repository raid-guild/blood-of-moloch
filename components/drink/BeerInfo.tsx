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
    <HStack w={"60%"} ml={"3em"}>
      <Box style={{ fontFamily: `'futura-pt', sans-serif` }}>
        <Heading fontFamily={theme.fonts.uncial}>{name.toUpperCase()}</Heading>
        <Text w={"70%"} textAlign={"left"}>
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
    <HStack>
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
    <Flex background={bgColor} py={"5em"} w={"100%"}>
      <Description name={copy.name} content={copy.beer} />
      <Divider orientation="vertical" />
      <Traits ibu={copy.traits.ibu} abv={copy.traits.abv} />
    </Flex>
  );
};

export default BeerInfo;
