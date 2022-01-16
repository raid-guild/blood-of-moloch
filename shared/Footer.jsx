import { VStack, HStack, Image, Link, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const StyledNavLink = styled(Text)`
  font-family: ${theme.fonts.texturina};
  color: white;
  text-align: center;
  font-weight: bold;
`;

export const Footer = () => {
  return (
    <VStack
      backgroundColor='#2B2C34'
      px={{ lg: '8rem', md: '4rem', base: '2rem' }}
      pb='2rem'
    >
      <Image
        src='/assets/logo_mono.svg'
        alt='logo'
        w={{ lg: 'auto', base: '70px' }}
        py='3rem'
      />
      <HStack w='100%' justifyContent='space-between'>
        <VStack>
          <StyledNavLink fontSize={{ lg: '16px', base: '14px' }}>
            Made with ⚔️ for our fellow raiders
          </StyledNavLink>
          <Text
            w='100%'
            color='#F0EFEF'
            textAlign='left'
            fontSize={{ lg: '14px', base: '12px' }}
          >
            © 2022 Raid Guild. All rights reserved.
          </Text>
        </VStack>

        <StyledNavLink color='white' fontSize={{ lg: '18px', base: '16px' }}>
          <i className='fab fa-discord'></i>
        </StyledNavLink>
      </HStack>
    </VStack>
  );
};
