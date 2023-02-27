import { VStack, Heading, OrderedList, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import { theme } from "../../styles/theme";

type StepsProps = {
  callToAction: string;
  bgColor: string;
  daoClaimUrl: string;
};
const Steps = ({ callToAction, bgColor, daoClaimUrl }: StepsProps) => {
  return (
    <VStack backgroundColor={bgColor} w={"100%"} py={"5em"}>
      <Heading fontFamily={theme.fonts.uncial} textAlign={"left"}>
        Start Here
      </Heading>
      <OrderedList fontFamily={theme.fonts.sourceSansPro}>
        <ListItem>{callToAction}</ListItem>
        <ListItem>Scan your QR code &amp; Enter the Secret Password</ListItem>
        <ListItem>Claim the Raid Brood NFT</ListItem>
        <ListItem>
          <a href={daoClaimUrl} style={{ fontWeight: `700`, color: `#E0232C` }}>
            Claim your DAO share with your nft and become a DAOist
          </a>
        </ListItem>
      </OrderedList>
    </VStack>
  );
};

export default Steps;
