import { Flex, Text, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { theme } from '../../styles/theme';

const StyledFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  background-image: url('/assets/hero_banner.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  justify-content: center;
`;
const StyledHeroText = styled(Text)`
  max-width: 70%;
  font-family: ${theme.fonts.uncial};
  letter-spacing: 1.2px;
  line-height: 1.5;
  color: white;
  text-align: center;
`;
const StyledSloganText = styled(Text)`
  font-family: ${theme.fonts.texturina};
  color: white;
  text-align: center;
`;
const StyledButtonPrimary = styled(Button)`
  min-width: 260px;
  height: 50px;
  font-family: ${theme.fonts.spaceMono};
  color: white;
  border-radius: 2px;
  background: linear-gradient(270deg, #7c3aed 0%, #ec4899 100%);
  padding-left: 24px;
  padding-right: 24px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: linear-gradient(270deg, #7c3aed 0%, #ec4899 100%);
  }
`;

export const Hero = () => {
  return (
    <StyledFlex
      minH={{ lg: '110vh', base: '90vh' }}
      px={{ lg: '8rem', md: '4rem', base: '2rem' }}
    >
      <StyledHeroText fontSize={{ lg: '50px', base: '24px' }}>
        For those who like beer and slaying Moloch.
      </StyledHeroText>
      <StyledSloganText fontSize={{ lg: '18px', base: '16px' }}>
        We have common interests. Let’s gather around them.
      </StyledSloganText>
      <br />
      <StyledButtonPrimary fontSize={{ lg: '18px', base: '16px' }}>
        Join Us
      </StyledButtonPrimary>
    </StyledFlex>
  );
};
