import { Flex, SimpleGrid, Text, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const StyledContainer = styled(SimpleGrid)`
  grid-gap: 1rem;
  background-color: #0f0f0e;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;
const StyledSubContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
`;
const StyledHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  line-height: 72px;
  color: white;
  text-align: left;
  margin-bottom: 1rem;
`;
const StyledBodyText = styled(Text)`
  font-family: ${theme.fonts.sourceSansPro};
  letter-spacing: 1.2px;
  color: white;
  text-align: left;
`;

export const Yeet = () => {
  return (
    <StyledContainer
      columns={{ base: 1, md: 2, lg: 2 }}
      px={{ lg: '8rem', md: '4rem', base: '2rem' }}
    >
      <StyledSubContainer>
        <StyledHeading fontSize={{ lg: '64px', base: '20px' }}>
          Yeet for Membership
        </StyledHeading>
        <StyledBodyText fontSize={{ lg: '18px', base: '12px' }}>
          Decide what kinds of beers we make and where we’ll drink them. Get
          access to perks, like gift bags and NFTs.
        </StyledBodyText>
        <StyledBodyText fontSize={{ lg: '18px', base: '12px' }}>
          We brewed some Blood of Moloch, so plan on claiming yours at
          EthDenver. btw, it’s potent!
        </StyledBodyText>
      </StyledSubContainer>
      <Image
        src='/assets/illustration_one.svg'
        alt='illustration'
        w={{ lg: '300px', base: '200px' }}
        ml='auto'
        mr={{ lg: '0', base: 'auto' }}
        mt={{ base: '2rem', lg: '0', md: '0' }}
      />
    </StyledContainer>
  );
};
