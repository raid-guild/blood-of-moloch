import { Flex, SimpleGrid, Text } from '@chakra-ui/react';

import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const StyledContainer = styled(Flex)`
  flex-direction: column;
  background: linear-gradient(180deg, #0f0f0e 38.61%, #2b2c34 87.02%);
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const StyledHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  letter-spacing: 1.2px;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
`;
const StyledCard = styled(Flex)`
  flex-direction: column;
  min-height: 380px;
  background: linear-gradient(180deg, #2b2c34 0%, #0f0f0e 100%);
  border-radius: 8px;
  padding: 20px 24px;
`;
const StyledCardHeading = styled(Text)`
  width: 100%;
  min-height: 50px;
  font-family: ${theme.fonts.uncial};
  letter-spacing: 1.2px;
  color: ${theme.colors.red};
  text-align: center;
  margin-bottom: 1rem;
`;
const StyledCostText = styled(Text)`
  font-family: ${theme.fonts.uncial};
  letter-spacing: 1.2px;
  color: white;
  text-align: left;
  margin-top: auto;
`;
const StyledCardText = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.texturina};
  letter-spacing: 1.2px;
  color: #fcfcfc;
  text-align: left;
  margin-bottom: 1rem;
`;

const membership_levels = [
  {
    title: 'Never let it end',
    loot: '2400 loot in RaidBrood DAO',
    desc: 'Premium DAO Membership VIP Access to All 2022 Events Case of Blood of Moloch Whitelisted for Limited Edition Mainnet NFT of brood recipes All base membership perks',
    cost: '666 xDai'
  },
  {
    title: 'One in each hand',
    loot: '200 loot in RaidBrood DAO',
    desc: 'Special EthDenver Event Access EthDenver Tasting Room Access 2 Special Blood of Moloch Collector cans All base membership perks',
    cost: '66 xDai'
  },
  {
    title: 'Yeah you can come too',
    loot: '100 loot in RaidBrood DAO',
    desc: ' Base Membership in RaidBrood DAO Governance on new beers and events Gift bag pick up at our events Limited edition Blood of Moloch collectors can Proof of yeet NFT',
    cost: '33 xDai'
  }
];

export const Membership = () => {
  return (
    <StyledContainer px={{ lg: '8rem', md: '4rem', base: '2rem' }}>
      <StyledHeading fontSize={{ lg: '32px', base: '20px' }}>
        Levels of Membership
      </StyledHeading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
        {membership_levels.map((level, index) => (
          <StyledCard key={index}>
            <StyledCardHeading fontSize={{ lg: '20px', base: '16px' }}>
              {level.title}
            </StyledCardHeading>
            <StyledCardText fontWeight='bold' my='1rem'>
              {level.loot}
            </StyledCardText>
            <StyledCardText fontSize={{ lg: '14px', base: '12px' }}>
              {level.desc}
            </StyledCardText>
            <StyledCostText>{level.cost}</StyledCostText>
          </StyledCard>
        ))}
      </SimpleGrid>
    </StyledContainer>
  );
};
