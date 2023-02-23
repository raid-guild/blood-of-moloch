import { useRouter } from "next/router";

import { Footer } from "../../shared/Footer";
import { Center, VStack } from "@chakra-ui/react";
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
    <VStack w={"100%"}>
      <LogoHeader path={`/assets/drink/${drink}/logo.png`} />
      <BeerInfo copy={copy} bgColor={"black"} />
      <Web3Info />
      <Steps callToAction={copy.callToAction} />
      <Badge path={`/assets/drink/${drink}/badge.png`} />
      <Lore first={copy.lore.first} second={copy.lore.second} />
      <Label path={`/assets/drink/${drink}/label.svg`} />
      <Footer />
    </VStack>
  );
}
