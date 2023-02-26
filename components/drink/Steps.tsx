import { VStack, Heading, OrderedList, ListItem } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

type StepsProps = {
  callToAction: string;
  bgColor: string;
};
const Steps = ({ callToAction, bgColor }: StepsProps) => {
  return (
    <VStack backgroundColor={bgColor} w={'100%'} py={'5em'}>
      <Heading
        fontFamily={theme.fonts.uncial}
        paddingBottom={'24px'}
        textAlign={'left'}
      >
        Start Here
      </Heading>
      <OrderedList fontFamily={theme.fonts.sourceSansPro} fontSize={'24px'}>
        <ListItem>{callToAction}</ListItem>
        <ListItem>Scan your QR code</ListItem>
        <ListItem>
          <span style={{ fontWeight: `700`, color: `#E0232C` }}>
            Claim the RaidBrood NFT
          </span>
        </ListItem>
        <ListItem>Get DAO Shares</ListItem>
      </OrderedList>
    </VStack>
  );
};

export default Steps;
