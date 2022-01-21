import { Flex, SimpleGrid, Text, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const StyledContainer = styled(SimpleGrid)`
  grid-gap: 1rem;
  background-color: #0f0f0e;
  margin-top: 5rem;
  margin-bottom: 5rem;
  align-items: center;
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
          Raid Brood is the first of it’s kind, a DAO dedicated to craft beer.
          Spun out from Raid Guild, our master brewer has cooked up Blood of
          Moloch, a special Russian Imperial Stout to commemorate EthDenver
          2022. In the spirit of web3, we’ve started a beer club as a DAO and
          invite you to join, taste, and help shape what the next brew will be
          at the next major ETH gathering.
        </StyledBodyText>
        <br />
        <StyledBodyText fontSize={{ lg: '18px', base: '12px' }}>
          Yeeter is a new primitive from DAOHaus that helps simplify capital
          coordination and we’re excited to show how powerful this tool can be.
          Connect to the Gnosis chain (formerly known as xDAI) and yeet to show
          your support!
        </StyledBodyText>
        <br />
        <StyledBodyText fontSize={{ lg: '18px', base: '12px' }}>
          Our first gathering will be during EthDenver where you’ll claim your
          first spoils. Yeet responsibly.
        </StyledBodyText>
      </StyledSubContainer>
      <Image
        src='/assets/illustration_one.svg'
        alt='illustration'
        w={{ lg: '450px', base: '200px' }}
        ml='auto'
        mr={{ lg: '0', base: 'auto' }}
        mt={{ base: '2rem', lg: '0', md: '0' }}
      />
    </StyledContainer>
  );
};
