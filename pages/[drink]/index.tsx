import { useRouter } from "next/router";

import CenteredPanel from "../../components/drink/CenteredPanel";
import { Footer } from "../../shared/Footer";
import { useToast, Center, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
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
  const logoSection = useRef(null);
  const beerInfoSection = useRef(null);
  const web3Section = useRef(null);
  const badgeSection = useRef(null);
  const loreSection = useRef(null);
  const stepsSection = useRef(null);
  const labelSection = useRef(null);
  const [nextSection, setNextSection] = useState(logoSection);

  const copy = Drinks[drink as string];
  // TODO route to 404 or home
  if (!copy) {
    return <Center>Ooopss...</Center>;
  }

  return (
    <VStack w={"100%"}>
      <CenteredPanel
        customRef={logoSection}
        onMouseEnter={() => setNextSection(beerInfoSection)}
      >
        <LogoHeader path={`/assets/drink/${drink}/logo.png`} />
      </CenteredPanel>
      <CenteredPanel
        customRef={beerInfoSection}
        onMouseEnter={() => setNextSection(web3Section)}
      >
        <BeerInfo copy={copy} bgColor={"black"} />
      </CenteredPanel>
      <CenteredPanel
        customRef={web3Section}
        onMouseEnter={() => setNextSection(badgeSection)}
      >
        <Web3Info />
      </CenteredPanel>
      <CenteredPanel
        customRef={stepsSection}
        onMouseEnter={() => setNextSection(badgeSection)}
      >
        <Steps callToAction={copy.callToAction} />
      </CenteredPanel>
      <CenteredPanel
        customRef={badgeSection}
        onMouseEnter={() => setNextSection(loreSection)}
      >
        <Badge path={`/assets/drink/${drink}/badge.png`} />
      </CenteredPanel>
      <CenteredPanel
        customRef={loreSection}
        onMouseEnter={() => setNextSection(labelSection)}
      >
        <Lore first={copy.lore.first} second={copy.lore.second} />
      </CenteredPanel>

      <CenteredPanel customRef={labelSection}>
        <Label path={`/assets/drink/${drink}/label.svg`} />
      </CenteredPanel>
      <Footer />
    </VStack>
  );
}
