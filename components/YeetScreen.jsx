import { VStack, SimpleGrid, Text, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const StyledHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  letter-spacing: 1.2px;
  color: white;
  text-align: left;
`;
const StyledBodyText = styled(Text)`
  font-family: ${theme.fonts.texturina};
  letter-spacing: 1.2px;
  color: white;
  text-align: left;
`;

export const YeetScreen = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      gap={10}
      backgroundColor='#0F0F0E'
      color='white'
      px={{ lg: '8rem', md: '4rem', base: '2rem' }}
      py='5rem'
    >
      <VStack justifyContent='space-around'>
        <StyledHeading fontSize={{ lg: '32px', base: '20px' }} mb='2rem'>
          Yeet for Membership
        </StyledHeading>
        <StyledBodyText fontSize={{ lg: '18px', base: '12px' }}>
          Decide what kinds of beers we make and where we’ll drink them. Get
          access to perks, like gift bags and NFTs. If you’re going to
          EthDenver, plan on meeting up, because we brewed some Blood of Moloch.
        </StyledBodyText>
      </VStack>
      <Image
        src='/assets/illustration_one.svg'
        alt='illustration'
        w={{ lg: '300px', base: '200px' }}
        ml='auto'
        mr={{ base: 'auto' }}
      />
    </SimpleGrid>
  );
};
