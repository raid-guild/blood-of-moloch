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
  font-family: ${theme.fonts.uncial};
  letter-spacing: 1.2px;
  color: white;
  text-align: center;
`;
const StyledSloganText = styled(Text)`
  font-family: ${theme.fonts.sourceSansPro};
  color: white;
  text-align: center;
  line-height: 24px;
`;
const StyledButtonPrimary = styled(Button)`
  min-width: 260px;
  height: 50px;
  font-family: ${theme.fonts.sourceSansPro};
  font-weight: 600;
  color: #fcfcfc;
  border-radius: 2px;
  line-height: 24px;
  text-transform: uppercase;
  background: linear-gradient(270deg, #7c3aed 0%, #ec4899 100%);
  padding-left: 24px;
  padding-right: 24px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: linear-gradient(270deg, #7c3aed 0%, #ec4899 100%);
    opacity: 80%;
  }
`;

export const Hero = () => {
  return (
    <StyledFlex
      minH={{ lg: '110vh', base: '90vh' }}
      px={{ lg: '8rem', md: '4rem', base: '2rem' }}
    >
      <StyledHeroText
        fontSize={{ lg: '80px', base: '24px' }}
        lineHeight={{ lg: '96px', sm: '32px' }}
      >
        For those who like beer and slaying Moloch.
      </StyledHeroText>
      <StyledSloganText fontSize={{ lg: '20px', base: '16px' }}>
        We have common interests. Let’s gather around them.
      </StyledSloganText>
      <br />
      <StyledButtonPrimary
        data-tf-popup={process.env.NEXT_PUBLIC_TYPEFORM_POPUP_ID}
        data-tf-iframe-props='title=Brood Guild'
        data-tf-medium='snippet'
        fontSize={{ lg: '18px', base: '16px' }}
      >
        Join Us
      </StyledButtonPrimary>
    </StyledFlex>
  );
};
