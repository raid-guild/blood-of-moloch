import {
  Flex,
  SimpleGrid,
  Text,
  List,
  Image,
  HStack,
  Box
} from '@chakra-ui/react';

import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { MEMBERSHIP_TYPES } from '../../utils/constants';

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
const StyledCard = styled(Flex)`
  width: 100%;
  position: absolute;
  flex-direction: column;
  background: linear-gradient(180deg, #2b2c34 0%, #0f0f0e 100%);
  border-radius: 8px;
  padding: 20px 24px;
`;
const StyledCardHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  line-height: 40px;
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
  font-family: ${theme.fonts.sourceSansPro};
  color: ${(color) => color};
  text-align: left;
  margin-bottom: 1rem;
`;
const StyledList = styled(List)`
  color: 'white';
  font-family: ${theme.fonts.sourceSansPro};
`;

export const Membership = () => {
  return (
    <StyledContainer px={{ lg: '8rem', md: '4rem', base: '2rem' }}>
      <StyledHeading fontSize={{ lg: '32px', base: '20px' }}>
        Levels of Membership
      </StyledHeading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 3 }} gap={10}>
        {MEMBERSHIP_TYPES.map((level, index) => (
          <Box
            minH={{ xl: '525px', lg: '525px', md: '525px', sm: '400px' }}
            position='relative'
            cursor='pointer'
          >
            <StyledCard
              h='100%'
              key={index}
              className='fader-slide fader-slide--1'
            >
              <StyledCardHeading
                minH={{ lg: '75px', sm: '40px' }}
                fontSize={{ lg: '36px', base: '16px' }}
              >
                {level.title}
              </StyledCardHeading>
              <StyledCardText
                fontWeight='bold'
                my='1rem'
                color='#B66AD6'
                fontSize={{ lg: '18px', base: '16px' }}
              >
                {level.loot}
              </StyledCardText>
              <StyledList>
                {level.points.map((point, index) => (
                  <HStack key={index} alignItems='start' mb='10px'>
                    <Image
                      src='/icons/drop_icon.svg'
                      w='12px'
                      mt='5px'
                      mr='5px'
                    />
                    <StyledCardText
                      color='white'
                      fontSize={{ lg: '16px', base: '14px' }}
                    >
                      {point}
                    </StyledCardText>
                  </HStack>
                ))}
              </StyledList>
              <br />

              <StyledCostText>
                {level.cost}
                {index == 2 && (
                  <Text
                    fontSize={{ lg: '8px', base: '6px' }}
                    color='white'
                    fontFamily={theme.fonts.sourceSansPro}
                  >
                    *Must be over 21 to pick up your can
                  </Text>
                )}
              </StyledCostText>
            </StyledCard>
            <StyledCard
              h={{ xl: '525px', lg: '525px', md: '525px', sm: '400px' }}
              key={index}
              className='fader-slide fader-slide--2'
              justifyContent='center'
            >
              <Image src={level.canImage} alt='cans' maxH='100%' />
            </StyledCard>
          </Box>
        ))}
      </SimpleGrid>
    </StyledContainer>
  );
};
