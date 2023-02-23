import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const StyledContainer = styled(SimpleGrid)`
  grid-gap: 1rem;
  background-color: #2b2c34;
  padding-top: 5rem;
  padding-bottom: 5rem;
  align-items: center;
`;
const StyledSubContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
`;
const StyledHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  line-height: 40px;
  color: white;
  text-align: left;
  padding-bottom: 1rem;
`;
const StyledBodyText = styled(Text)`
  font-family: ${theme.fonts.sourceSansPro};
  letter-spacing: 1.2px;
  color: white;
  text-align: left;
`;

export const Dao = () => {
  return (
    <StyledContainer
      columns={{ base: 1, md: 2, lg: 2 }}
      px={{ lg: '8rem', md: '4rem', base: '2rem' }}
      pt='5rem'
    >
      <StyledHeading fontSize={{ lg: '36px', base: '20px' }}>
        RaidBrood DAO is an invitation from Raid Guild to those who are
        dedicated to slaying Moloch.
      </StyledHeading>
      <StyledSubContainer>
        <StyledBodyText fontSize={{ lg: '18px', base: '12px' }}>
          When you Yeet into the DAO, you’re sharing in the harvests of battling
          the demon who conspires against humanity.
        </StyledBodyText>
        <br />
        <StyledBodyText fontSize={{ lg: '18px', base: '12px' }}>
          We’ll be combining our web3 powers into borderless taverns where
          brewing decisions are shared; starting from the design phase, the
          eventual enjoyment of this laborious endeavor will be consumed during
          physical gatherings around the world.
        </StyledBodyText>
        <br />
        <StyledBodyText fontSize={{ lg: '18px', base: '12px' }}>
          Blood of Moloch is the inaugural brew of Raid Brood, to be released at
          EthDenver 2022 - and this is just the beginning. Preparations are
          already in mind for the next brew - join us to slay Moloch, and taste
          its blood!
        </StyledBodyText>
      </StyledSubContainer>
    </StyledContainer>
  );
};
