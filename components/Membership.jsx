import { VStack, SimpleGrid, Box, Heading, Text } from '@chakra-ui/react';

import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const StyledHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  letter-spacing: 1.2px;
  color: ${({ color }) => (color ? color : 'white')};
  text-align: center;
`;
const StyledVStack = styled(VStack)`
  min-height: 380px;
  background: linear-gradient(180deg, #2b2c34 0%, #0f0f0e 100%);
  border-radius: 8px;
  padding: 20px 24px;
`;
const StyledCostText = styled(Text)`
  font-family: ${theme.fonts.uncial};
  letter-spacing: 1.2px;
  color: white;
  text-align: left;
`;
const StyledBodyText = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.texturina};
  letter-spacing: 1.2px;
  color: #fcfcfc;
  text-align: left;
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
    <VStack
      background='linear-gradient(180deg, #0F0F0E 38.61%, #2B2C34 87.02%);'
      color='white'
      px={{ lg: '8rem', md: '4rem', base: '2rem' }}
      py='5rem'
    >
      <StyledHeading fontSize={{ lg: '32px', base: '20px' }} mb='2rem'>
        Levels of Membership
      </StyledHeading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
        {membership_levels.map((level, index) => (
          <StyledVStack key={index}>
            <StyledHeading
              color={theme.colors.red}
              fontSize={{ lg: '20px', base: '16px' }}
              minH='70px'
              mb='1rem'
            >
              {level.title}
            </StyledHeading>
            <StyledBodyText fontWeight='bold' my='1rem'>
              {level.loot}
            </StyledBodyText>
            <StyledBodyText
              fontSize={{ lg: '14px', base: '12px' }}
              style={{ marginBottom: '1rem' }}
            >
              {level.desc}
            </StyledBodyText>
            <StyledCostText style={{ marginTop: 'auto' }}>
              {level.cost}
            </StyledCostText>
          </StyledVStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
