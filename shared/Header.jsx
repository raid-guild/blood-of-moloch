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
  font-family: ${theme.fonts.sourceSansPro};
  color: white;
  text-align: center;
  font-weight: bold;
  line-height: 22px;
`;

export const Header = ({ windowWidth }) => {
  return (
    <StyledContainer px={{ lg: '8rem', md: '4rem', base: '2rem' }}>
      {windowWidth < 750 && (
        <StyledNavLink w={{ lg: '32px', base: '24px' }} href='/lore'>
          <i className='fas fa-question-circle'></i>
        </StyledNavLink>
      )}
      {windowWidth > 750 && (
        <StyledNavLink fontSize={{ lg: '18px', base: '16px' }} href='/lore'>
          Lore
        </StyledNavLink>
      )}

      <Image
        position='absolute'
        left={0}
        right={0}
        ml='auto'
        mr='auto'
        src='/assets/logo_header.svg'
        alt='logo'
        w={{ lg: '70px', base: '40px' }}
      />

      <Flex direction='row' alignItems='center'>
        <Image
          src='/icons/discord_icon.svg'
          alt='discord'
          w={{ lg: '32px', base: '18px' }}
          mr='.5rem'
        />
        <Image
          src='/icons/twitter_icon.svg'
          alt='twitter'
          w={{ lg: '32px', base: '18px' }}
          cursor='pointer'
          onClick={() =>
            window.open('https://twitter.com/BroodGuild', '_blank')
          }
        />
      </Flex>
    </StyledContainer>
  );
};
