import { Flex, SimpleGrid, Text, Image, Link } from '@chakra-ui/react';
import NextLink from "next/link";

import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { BEER_CONTENT } from '../../utils/constants';

const StyledContainer = styled(Flex)`
  flex-direction: column;
  background: linear-gradient(180deg, #0f0f0e 38.61%, #2b2c34 87.02%);
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const StyledHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  line-height: 72px;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledCardHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  line-height: 40px;
  color: ${theme.colors.red};
  text-align: center;
`;

const StyledBodyText = styled(Text)`
  font-family: ${theme.fonts.sourceSansPro};
  letter-spacing: 1.2px;
  color: white;
  text-align: left;
`;

export const Beers = () => {
  return (
    <StyledContainer px={{ lg: '8rem', md: '4rem', base: '2rem' }}>
      <StyledHeading fontSize={{ xl: '54px', lg: '44px', base: '36px' }}>
        Our Brood
      </StyledHeading>
      <StyledBodyText fontSize={{ lg: '24px', base: '20px' }}>
        At Raid Brood, brews are our weapons in the fight against Moloch. Armed
        with grains, hops, yeast and water, our master brewers are practiced in
        the arts and sciences of brewish battle. This is our arsenal.
      </StyledBodyText>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 2, xl: 2 }}
        gap={10}
        pt={{ base: 3, sm: 10, md: 18 }}
      >
        {BEER_CONTENT.map((beer) => (
          <NextLink href={beer.path} key={beer.title} passHref>
            <Link
              _hover={{ bgColor: theme.colors.blackDark }}
              _focus={{ bgColor: theme.colors.blackDark }}
              borderRadius="md"
            >
              <Flex direction="column" p={8} gap={8}>
                <StyledCardHeading
                  minH={{ lg: '75px', sm: '40px' }}
                  fontSize={{ lg: '48px', base: '24px' }}
                >
                  {beer.title}
                </StyledCardHeading>
                <Image src={beer.label} alt='cans' maxH='100%' />
                <Text
                  color='#B66AD6'
                  fontSize={{ lg: '20px', base: '16px' }}
                >
                  {beer.description}
                </Text>
              </Flex>
            </Link>
          </NextLink>
        ))}
      </SimpleGrid>
    </StyledContainer>
  );
};
