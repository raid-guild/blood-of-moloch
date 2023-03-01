import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  Divider,
  Stack,
  Center,
} from '@chakra-ui/react';

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
    <Flex direction="column" minW={'250px'} px={'3em'} gap={2}>
      <Heading textTransform="uppercase">{name}</Heading>
      <Text w={'100%'} textAlign={'left'}>
        {content}
      </Text>
    </Flex>
  );
};

const Traits = ({ ibu, abv }: TraitsProps) => {
  const style = {
    heading: {
      fontFamily: `'futura-pt', sans-serif`,
    },
    data: {
      fontSize: `40px`,
      fontWeight: `200`,
      color: `#898989`,
    },
  };

  return (
    <Flex minW={'250px'} justifyContent={'center'} m="0 !important">
      <Flex direction="column" alignItems="center">
        <Heading sx={style.heading}>ABV</Heading>
        <Text sx={style.data}>{`${abv} %`}</Text>
      </Flex>
      <Divider orientation="vertical" mx={4} borderColor="#EBEBEB" h="100px" borderLeftWidth="2px !important" />
      <Flex direction="column" alignItems="center">
        <Heading sx={style.heading}>IBU</Heading>
        <Text sx={style.data}>{ibu}</Text>
      </Flex>
    </Flex>
  );
};

const BeerInfo = ({ bgColor, copy }) => {
  return (
    <Center w={'100% '} background={bgColor}>
      <Stack
        direction={['column', 'row']}
        justifyContent={'center'}
        py={'5em'}
        maxW={'750px'}
        gap={8}
      >
        <Description name={copy.style} content={copy.beer} />
        <Traits ibu={copy.traits.ibu} abv={copy.traits.abv} />
      </Stack>
    </Center>
  );
};

export default BeerInfo;
