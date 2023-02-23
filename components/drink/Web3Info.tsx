import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import styles from "../../styles/Home.module.scss";
import { theme } from "../../styles/theme";

const Web3Info = () => {
  return (
    <Center bgColor={"black"}>
      <VStack maxW={"750px"} py={"5em"}>
        <Heading className={styles.heading} fontFamily={theme.fonts.uncial}>
          WEB3 MEETS BEER.
        </Heading>
        <Text width={"70%"} fontFamily={theme.fonts.sourceSansPro}>
          <span style={{ fontWeight: `700` }}>
            You are on the way to joining the Raid Brood DAO.
          </span>{" "}
          Dao members are part of our community and invited to make suggestions
          and decisions about our future brews and events. When you swallow your
          Red Pil, you&apos;ll{" "}
          <span style={{ fontWeight: `700`, color: `#E0232C` }}>
            claim the Raid Brood NFT
          </span>{" "}
          with the ease of scanning a QR code. This is your entrance into our
          DAO.
        </Text>
      </VStack>
    </Center>
  );
};

export default Web3Info;
