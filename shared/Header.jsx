import { Flex, Image, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const StyledContainer = styled(Flex)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 24px;
`;
const StyledNavLink = styled(Link)`
  font-family: ${theme.fonts.texturina};
  color: white;
  text-align: center;
  font-weight: bold;
`;

export const Header = ({ windowWidth }) => {
  return (
    <StyledContainer px={{ lg: '8rem', md: '4rem', base: '2rem' }}>
      {windowWidth < 750 && (
        <StyledNavLink fontSize={{ lg: '18px', base: '16px' }}>
          <i className='fas fa-question-circle'></i>
        </StyledNavLink>
      )}
      {windowWidth > 750 && (
        <StyledNavLink fontSize={{ lg: '18px', base: '16px' }}>
          About
        </StyledNavLink>
      )}

      <Image
        position='absolute'
        left={0}
        right={0}
        ml='auto'
        mr='auto'
        src='/assets/logo_full.svg'
        alt='logo'
        w={{ lg: 'auto', base: '100px' }}
      />

      <StyledNavLink fontSize={{ lg: '18px', base: '16px' }}>
        <i className='fab fa-discord'></i>
      </StyledNavLink>
    </StyledContainer>
  );
};
