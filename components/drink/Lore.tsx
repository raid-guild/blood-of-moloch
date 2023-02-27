import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react';

type LoreProps = {
  first: string;
  second: string;
  third: string;
  fourth: string;
  bgColor: string;
};

const Lore = ({ first, second, third, fourth, bgColor }: LoreProps) => {
  return (
    <Center bgColor={bgColor} w={'100%'}>
      <VStack maxW={'750px'} py={'5em'}>
        <Heading textAlign={'left'}>Lore</Heading>
        <Box w={'70%'}>
          <Text w={'100%'}>{first}</Text>
          <br />
          <Text w={'100%'}>{second}</Text>
          <br />
          <Text w={'100%'}>{third}</Text>
          <br />
          <Text w={'100%'}>{fourth}</Text>
        </Box>
      </VStack>
    </Center>
  );
};

export default Lore;
