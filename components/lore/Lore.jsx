import { Flex, SimpleGrid, Text, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { MEDIA_FILES } from '../../utils/constants';

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

export const Lore = () => {
  return (
    <StyledContainer
      columns={{ base: 1, md: 2, lg: 2 }}
      px={{ lg: '8rem', md: '4rem', base: '2rem' }}
      pt={{ lg: '5rem', md: '5rem', base: '1rem' }}
    >
      <StyledSubContainer>
        <StyledHeading fontSize={{ lg: '64px', base: '20px' }}>
          Lore
        </StyledHeading>
        <StyledBodyText fontSize={{ lg: '18px', base: '12px' }}>
          Through the long winter of '18 and the mania that followed, the
          mercenaries at Raid Guild have gathered to share stories of battle,
          cleaning the Blood of Moloch from their armor and sharpening their
          swords.
        </StyledBodyText>
        <br />
        <StyledBodyText fontSize={{ lg: '18px', base: '12px' }}>
          Inspired by the tirelessness of fellow Raid Guild members, the noble
          Sasquatch, a cleric and master of potions, concocted a fermented
          beverage to quench the thirsts for our ongoing battle with Moloch. The
          recipe and the brewing of this dark nectar has resulted in what will
          forever be known as Blood Of Moloch.
        </StyledBodyText>
      </StyledSubContainer>
      <Image
        src={MEDIA_FILES.illustrations.three}
        alt='illustration'
        w={{ lg: '450px', base: '200px' }}
        ml='auto'
        mr={{ lg: '0', base: 'auto' }}
        mt={{ base: '2rem', lg: '0', md: '0' }}
      />
    </StyledContainer>
  );
};
