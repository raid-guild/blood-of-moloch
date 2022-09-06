import { SimpleGrid, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { MEDIA_FILES } from '../../utils/constants';

const StyledContainer = styled(SimpleGrid)`
  grid-gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
`;

export const Eevee = () => {
  return (
    <StyledContainer
      px={{ lg: '8rem', md: '4rem', base: '2rem' }}
      columns={{ base: 1, md: 2, lg: 2 }}
    >
      <Image
        src={MEDIA_FILES.illustrations.four}
        w={{ lg: '250px', md: '250px', base: '200px' }}
        alt='blood of moloch text'
        mx='auto'
      />
      <Image src='/assets/eevee_gif.gif' alt='can' />
    </StyledContainer>
  );
};
