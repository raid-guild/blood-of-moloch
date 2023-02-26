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
  const style = {
    p: {
      fontFamily: `'Source Sans Pro', sans-serif`,
      fontStyle: `normal`,
      fontWeight: `400`,
      fontSize: `24px`,
      lineHeight: `32px`,
    },
  };
  return (
    <HStack minW={'250px'} w={'100%'} ml={'3em'}>
      <Box>
        <Heading paddingBottom={'36px'}>{name.toUpperCase()}</Heading>
        <Text sx={style.p} w={'100%'} textAlign={'left'}>
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
      fontWeight: `200`,
      color: `#898989`,
    },
  };

  return (
    <HStack minW={'250px'} justifyContent={'center'}>
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
    <Center w={'100% '} background={bgColor}>
      <Stack
        direction={['column', 'row']}
        justifyContent={'center'}
        py={'5em'}
        maxW={'750px'}
      >
        <Description name={copy.style} content={copy.beer} />
        <Divider orientation='vertical' />
        <Traits ibu={copy.traits.ibu} abv={copy.traits.abv} />
      </Stack>
    </Center>
  );
};

export default BeerInfo;
