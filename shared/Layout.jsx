import { ChakraProvider, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { theme } from '../styles/theme';

const StyledLayoutFlex = styled(Flex)`
  flex-direction: column;
  background-color: #0f0f0e;
`;

export const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <StyledLayoutFlex>{children}</StyledLayoutFlex>
    </ChakraProvider>
  );
};
