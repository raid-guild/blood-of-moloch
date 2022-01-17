import { Flex, Image, Link, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const StyledContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  background-color: #2b2c34;
  padding-bottom: 2rem;
`;
const StyledNavLink = styled(Link)`
  font-family: ${theme.fonts.texturina};
  color: white;
  text-align: center;
  font-weight: bold;
`;
const StyledRightsText = styled(Text)`
  width: 100%;
  color: #f0efef;
  text-align: left;
`;

export const Footer = () => {
  return (
    <StyledContainer px={{ lg: '8rem', md: '4rem', base: '2rem' }}>
      <Image
        src='/assets/logo_mono.svg'
        alt='logo'
        w={{ lg: '100px', base: '70px' }}
        py='3rem'
      />
      <Flex w='100%' direction='row' justifyContent='space-between'>
        <Flex direction='column'>
          <StyledNavLink fontSize={{ lg: '16px', base: '14px' }}>
            Made with ⚔️ for our fellow raiders
          </StyledNavLink>
          <StyledRightsText fontSize={{ lg: '14px', base: '12px' }}>
            © 2022 Raid Guild. All rights reserved.
          </StyledRightsText>
        </Flex>

        <StyledNavLink fontSize={{ lg: '18px', base: '16px' }}>
          <i className='fab fa-discord'></i>
        </StyledNavLink>
      </Flex>
    </StyledContainer>
  );
};
