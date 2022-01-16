import { HStack, Image, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const StyledNavLink = styled(Link)`
  font-family: ${theme.fonts.texturina};
  color: white;
  text-align: center;
  font-weight: bold;
`;

export const Header = () => {
  return (
    <HStack
      w='100%'
      justifyContent='space-between'
      position='absolute'
      top='24px'
      px={{ lg: '8rem', md: '4rem', base: '2rem' }}
    >
      <StyledNavLink fontSize={{ lg: '18px', base: '16px' }}>
        About
      </StyledNavLink>
      <Image
        src='/assets/logo_full.svg'
        alt='logo'
        w={{ lg: 'auto', base: '100px' }}
      />
      <StyledNavLink color='white' fontSize={{ lg: '18px', base: '16px' }}>
        <i className='fab fa-discord'></i>
      </StyledNavLink>
    </HStack>
  );
};
