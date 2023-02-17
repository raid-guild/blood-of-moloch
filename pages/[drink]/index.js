import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.scss";
import FixedBanner from "../../components/drink/FixedBanner";
import CenteredPanel from "../../components/drink/CenteredPanel";
import HexPanel from "../../components/drink/HexPanel";
import RedLine from "../../components/drink/RedLine";
import Footer from "../../components/drink/Footer";
import {
  Box,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Image,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import Drinks from "../api/copy.json";

export default function DrinkPage() {
  const router = useRouter();
  const { drink } = router.query;
  const toast = useToast();
  const web3Section = useRef(null);
  const podSection = useRef(null);
  const beerCanSection = useRef(null);
  const [nextSection, setNextSection] = useState(web3Section);
  const [hash, setHash] = useState("");
  const [isHashSubmitted, setIsHashSubmitted] = useState(false);

  const copy = Drinks[drink];
  // TODO route to 404 or home
  if (!copy) {
    return <>Ooopss...</>;
  }

  const executeScroll = () => {
    nextSection.current.scrollIntoView({ behavior: `smooth` });
    setNextSection((v) => {
      if (v == web3Section) {
        return podSection;
      }
      if (v == podSection) {
        return beerCanSection;
      }
      return v;
    });
  };

  const copyAddress = async (address) => {
    await navigator.clipboard.writeText(address);
    toast.success({
      title: "Address copied",
      description: address,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box sx={{ display: `grid`, gridTemplateColumns: `1fr 5fr` }}>
        <div>
          <FixedBanner />
        </div>
        <Box>
          <CenteredPanel onMouseEnter={() => setNextSection(web3Section)}>
            <div>
              <Heading className={styles.heading}>{copy.heading.title}</Heading>
              <Heading className={styles.heading}>
                {copy.heading.subtitle}
              </Heading>
            </div>
          </CenteredPanel>
          <CenteredPanel
            customRef={web3Section}
            onMouseEnter={() => setNextSection(podSection)}
          >
            <div>
              <Heading className={styles.heading}>
                WEB3 MEETS{" "}
                <span
                  style={{
                    fontFamily: `'futura-pt-bold', sans-serif`,
                    fontWeight: `700`,
                    color: `#E0232C`,
                  }}
                >
                  BEER.
                </span>
              </Heading>
              <HexPanel>
                <>
                  <div style={{ fontFamily: `'futura-pt', sans-serif` }}>
                    <Heading>{copy.name.toUpperCase()}</Heading>
                    <Text>{copy.beer}</Text>
                  </div>
                  <div
                    style={{
                      display: `flex`,
                      alignItems: `center`,
                      justifyContent: `center`,
                      height: `fit-content`,
                      gap: `1rem`,
                    }}
                  >
                    <div>
                      <Heading sx={{ fontFamily: `'futura-pt', sans-serif` }}>
                        ABV
                      </Heading>
                      <Text
                        sx={{
                          fontSize: `40px`,
                          fontFamily: `'futura-pt', sans-serif`,
                          fontWeight: `200`,
                          color: `#898989`,
                        }}
                      >
                        {`${copy.traits.abv} %`}
                      </Text>
                    </div>
                    <div
                      style={{
                        display: `block`,
                        height: `100px`,
                        width: `2px`,
                        backgroundColor: `#EBEBEB`,
                      }}
                    ></div>
                    <div>
                      <Heading sx={{ fontFamily: `'futura-pt', sans-serif` }}>
                        IBU
                      </Heading>
                      <Text
                        sx={{
                          fontSize: `40px`,
                          fontFamily: `'futura-pt', sans-serif`,
                          fontWeight: `200`,
                          color: `#898989`,
                        }}
                      >
                        {copy.traits.ibu}
                      </Text>
                    </div>
                  </div>
                </>
              </HexPanel>
            </div>
          </CenteredPanel>
          <CenteredPanel
            customRef={podSection}
            onMouseEnter={() => setNextSection(beerCanSection)}
          >
            <div>
              <Heading className={styles.heading}>
                {copy.callToAction.toUpperCase()}
              </Heading>
              <HexPanel>
                <>
                  <div>
                    <Heading sx={{ fontFamily: `'futura-pt', sans-serif` }}>
                      Start Here
                    </Heading>
                    <OrderedList
                      sx={{
                        fontFamily: `'futura-pt', sans-serif`,
                        maxWidth: `30ch`,
                      }}
                    >
                      <ListItem>{copy.callToAction}</ListItem>
                      <ListItem>
                        Scan your QR code &amp; Enter the Secret Password
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: `700`, color: `#E0232C` }}>
                          Claim the Raid Brood NFT
                        </span>{" "}
                        &amp; become a DAOist
                      </ListItem>
                    </OrderedList>
                  </div>
                  <div style={{ fontFamily: `'futura-pt', sans-serif` }}>
                    <Heading>WEB3 Meets Beer</Heading>
                    <Text>
                      <span style={{ fontWeight: `700` }}>
                        You are on the way to joining the Raid Brood DAO.
                      </span>{" "}
                      Dao members are part of our community and invited to make
                      suggestions and decisions about our future brews and
                      events. When you swallow your Red Pil, you&apos;ll{" "}
                      <span style={{ fontWeight: `700`, color: `#E0232C` }}>
                        claim the Raid Brood NFT
                      </span>{" "}
                      with the ease of scanning a QR code. This is your entrance
                      into our DAO.
                    </Text>
                  </div>
                </>
              </HexPanel>
            </div>
          </CenteredPanel>

          <CenteredPanel customRef={beerCanSection}>
            <iframe
              src="https://my.spline.design/realisticsodacancopy-a3a8de6488bfc09d3122f167efec28c0/"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>
            <Image
              src={`/assets/whiterabbit.png`}
              alt=""
              sx={{ position: `absolute`, bottom: `0px`, right: `10%` }}
            />
          </CenteredPanel>
        </Box>
      </Box>
      <Footer />
      <Image
        src="/assets/drink/redpil/Pill.png"
        alt={"logo"}
        sx={{
          position: `fixed`,
          right: `5vw`,
          bottom: `5vh`,
          width: `60px`,
          zIndex: `1`,
        }}
        _hover={{ cursor: `pointer` }}
        onClick={() => executeScroll()}
      />
    </>
  );
}
