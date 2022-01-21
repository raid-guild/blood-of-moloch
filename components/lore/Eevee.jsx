import { Flex, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const StyledFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const Eevee = () => {
  return (
    <StyledFlex px={{ lg: '8rem', md: '4rem', base: '2rem' }}>
      <Image src='/assets/eevee_gif.gif' alt='can' />
    </StyledFlex>
  );
};
