import { Flex, Image, Link, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const StyledContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  background-color: #2b2c34;
  padding-bottom: 2rem;
`;
const StyledHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  line-height: 72px;
  color: white;
  text-align: left;
  margin: 1rem 0 4rem 0;
`;
const StyledBodyText = styled(Text)`
  font-family: ${theme.fonts.sourceSansPro};
  letter-spacing: 1.2px;
  color: white;
  text-align: left;
`;

export const Brew = () => {
  return (
    <StyledContainer px={{ lg: '8rem', md: '4rem', base: '2rem' }}>
      <Flex w='100%' direction='column' justifyContent='space-between'>
        <StyledHeading fontSize={{ xl: '54px', lg: '44px', base: '20px' }}>
          Brew a Batch
        </StyledHeading>
        <StyledBodyText fontSize={{ lg: '18px', base: '12px' }}>
          RaidBrood brews custom batches for communities, conferences, and other
          events. Example brew collaborators include{' '}
          <a href='https://greenpill.party/'>GreenPill Podcast</a> and{' '}
          <a href='https://www.sporkdao.org/'>SporkDAO/ETHDenver 2023</a>.
        </StyledBodyText>
        <StyledBodyText fontSize={{ lg: '18px', base: '12px' }}>
          Do you want to join us in the endeavour of exlixir to fuel our fight
          against Moloch by making a batch for you?
        </StyledBodyText>
      </Flex>

      <button
        data-tf-popup='IGJVI7XW'
        data-tf-opacity='100'
        data-tf-size='100'
        data-tf-iframe-props='title=Brood Tester'
        data-tf-transitive-search-params
        data-tf-medium='snippet'
        style={{
          all: 'unset',
          fontFamily: 'Helvetica,Arial,sans-serif',
          display: 'inline-block',
          maxWidth: '100%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          backgroundColor: '#0445AF',
          color: '#fff',
          fontSize: '20px',
          borderRadius: '25px',
          padding: '0 33px',
          fontWeight: 'bold',
          height: '50px',
          cursor: 'pointer',
          lineHeight: '50px',
          textAlign: 'center',
          margin: '0',
          textDecoration: 'none',
        }}
      >
        Contact Us
      </button>
    </StyledContainer>
  );
};
