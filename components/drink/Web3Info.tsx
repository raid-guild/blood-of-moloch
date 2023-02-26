import { Center, Heading, Text, VStack } from '@chakra-ui/react';
import styles from '../../styles/Home.module.scss';
import { theme } from '../../styles/theme';

const Web3Info = ({ bgColor }) => {
  return (
    <Center bgColor={bgColor} w={'100%'}>
      <VStack maxW={'750px'} py={'5em'}>
        <Heading
          className={styles.heading}
          fontFamily={theme.fonts.uncial}
          paddingBottom={'36px'}
        >
          WEB3 MEETS BEER.
        </Heading>
        <Text
          width={'90%'}
          fontFamily={theme.fonts.sourceSansPro}
          fontSize={'24px'}
        >
          <span style={{ fontWeight: `700` }}>
            You are on the way to joining the RaidBrood DAO.
          </span>{' '}
          Members are part of our community and invited to make suggestions and
          decisions about future brews and events. When you swallow your Red
          Pil, you&apos;ll{' '}
          <span style={{ fontWeight: `700`, color: `#E0232C` }}>
            claim the Raid Brood NFT
          </span>{' '}
          with the ease of scanning a QR code. This is your entrance into our
          DAO.
        </Text>
      </VStack>
    </Center>
  );
};

export default Web3Info;
