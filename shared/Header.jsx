import { Flex, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { MEDIA_FILES } from '../utils/constants';

const StyledContainer = styled(Flex)`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  top: 24px;
`;

export const Header = () => {
  return (
    <StyledContainer px={{ lg: '8rem', md: '4rem', base: '2rem' }}>
      <Image
        position='absolute'
        left={0}
        right={0}
        ml='auto'
        mr='auto'
        src={MEDIA_FILES.logos.header}
        alt='logo'
        cursor='pointer'
        onClick={() => (window.location.href = '/')}
        w={{ lg: '170px', base: '100px' }}
      />

      <Flex direction='row' alignItems='center'>
        <Image
          src={MEDIA_FILES.icons.discord}
          alt='discord'
          w={{ lg: '32px', base: '18px' }}
          mr='.5rem'
          cursor='pointer'
          onClick={() => window.open('https://discord.gg/AMHbFZdcHs', '_blank')}
        />
        <Image
          src={MEDIA_FILES.icons.twitter}
          alt='twitter'
          w={{ lg: '32px', base: '18px' }}
          cursor='pointer'
          onClick={() => window.open('https://twitter.com/RaidBrood', '_blank')}
        />
      </Flex>
    </StyledContainer>
  );
};
