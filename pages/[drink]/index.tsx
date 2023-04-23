import { useRouter } from "next/router";

import { Footer } from "../../shared/Footer";
import { Center, Flex } from "@chakra-ui/react";
import Drinks from "../api/drinks.json";
import BeerInfo from "../../components/drink/BeerInfo";
import LogoHeader from "../../components/drink/LogoHeader";
import Lore from "../../components/drink/Lore";
import Web3Info from "../../components/drink/Web3Info";
import Label from "../../components/drink/Label";
import Badge from "../../components/drink/Badge";
import Steps from "../../components/drink/Steps";

export default function DrinkPage() {
  const router = useRouter();
  const { drink } = router.query;

  const copy = Drinks[drink as string];
  // TODO route to 404 or home
  if (!copy) {
    return <Center>Ooopss...</Center>;
  }

  return (
    <Flex direction="column">
      <LogoHeader path={`/assets/drink/${drink}/logo.${drink === 'seoulbound' ? 'png' : 'svg'}`} />
      <BeerInfo copy={copy} bgColor={"black"} />
      <Web3Info bgColor={"#2b2c34"} />
      {copy.callToAction && (
        <Steps
          callToAction={copy.callToAction}
          bgColor={"black"}
          daoClaimUrl={copy.daoClaimUrl}
        />
      )}
      <Badge path={`/assets/drink/${drink}/badge.svg`} bgColor={"#2b2c34"} />
      <Lore
        first={copy.lore.first}
        second={copy.lore.second}
        third={copy.lore.third}
        fourth={copy.lore.fourth}
        bgColor={"black"}
      />
      <Label path={`/assets/drink/${drink}/label.svg`} bgColor={"#2b2c34"} />
      <Footer />
    </Flex>
  );
}
