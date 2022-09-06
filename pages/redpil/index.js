import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import FixedBanner from "../../components/redpil/FixedBanner";
import CenteredPanel from "../../components/redpil/CenteredPanel";
import HexPanel from "../../components/redpil/HexPanel";
import RedLine from "../../components/redpil/RedLine";
import Footer from "../../components/redpil/Footer";
import {
  Box,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function Home() {
  const web3Section = useRef(null);
  const takePilSection = useRef(null);
  const beerCanSection = useRef(null);
  const [nextSection, setNextSection] = useState(web3Section);

  const executeScroll = () => {
    nextSection.current.scrollIntoView({ behavior: `smooth` });
    setNextSection((v) => {
      if (v == web3Section) {
        return takePilSection;
      }
      if (v == takePilSection) {
        return beerCanSection;
      }
      return v;
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
              <Heading className={styles.heading}>
                GOOD FOR{" "}
                <span
                  style={{
                    fontFamily: `'futura-pt-bold', sans-serif`,
                    fontWeight: `700`,
                    color: `#E0232C`,
                  }}
                >
                  HUMANITY.
                </span>
              </Heading>
              <Heading className={styles.heading}>BAD FOR MOLOCH.</Heading>
            </div>
          </CenteredPanel>
          <CenteredPanel
            customRef={web3Section}
            onMouseEnter={() => setNextSection(takePilSection)}
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
                    <Heading>RED PIL</Heading>
                    <Text>
                      Crisp and dry, traditional pilsner profile with a touch of
                      lemongrass, bergamot, and black tea from late Saphir hop
                      additions.
                    </Text>
                    <Text>
                      Fermented with Old World + New Beast Kviek Yeast.
                    </Text>
                    <Text>
                      All the clean pilsner taste, with only 1/6 the brewing
                      time.
                    </Text>
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
                        42
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
                        5.1%
                      </Text>
                    </div>
                  </div>
                </>
              </HexPanel>
            </div>
          </CenteredPanel>
          <CenteredPanel
            customRef={takePilSection}
            onMouseEnter={() => setNextSection(beerCanSection)}
          >
            <div>
              <Heading className={styles.heading}>
                TAKE THE{" "}
                <span
                  style={{
                    fontFamily: `'futura-pt-bold', sans-serif`,
                    fontWeight: `700`,
                    color: `#E0232C`,
                  }}
                >
                  PIL.
                </span>
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
                      <ListItem>Take The Pil</ListItem>
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
              src="/assets/redpil/whiterabbit.png"
              alt=""
              sx={{ position: `absolute`, bottom: `0px`, right: `10%` }}
            />
          </CenteredPanel>
        </Box>
      </Box>
      <Footer />
      <Image
        src="/assets/redpil/Pill.png"
        sx={{
          position: `fixed`,
          right: `5vw`,
          bottom: `5vh`,
          width: `60px`,
          zIndex: `1`,
        }}
        _hover={{cursor: `pointer`}}
        onClick={() => executeScroll()}
      />
    </>
  );
}
