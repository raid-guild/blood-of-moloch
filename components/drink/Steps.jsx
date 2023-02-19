import { VStack, Heading, OrderedList, ListItem } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

const Steps = (props) => {
  return (
    <VStack backgroundColor={"black"} w={"100%"} py={"5em"}>
      <Heading fontFamily={theme.fonts.uncial} textAlign={"left"}>
        Start Here
      </Heading>
      <OrderedList fontFamily={theme.fonts.sourceSansPro}>
        <ListItem>{props.callToAction}</ListItem>
        <ListItem>Scan your QR code &amp; Enter the Secret Password</ListItem>
        <ListItem>
          <span style={{ fontWeight: `700`, color: `#E0232C` }}>
            Claim the Raid Brood NFT
          </span>{" "}
          &amp; become a DAOist
        </ListItem>
      </OrderedList>
    </VStack>
  );
};

export default Steps;
