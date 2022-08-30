import Head from "next/head";
import styles from "../styles/Home.module.css";
import FixedBanner from "../components/FixedBanner";
import CenteredPanel from "../components/CenteredPanel";
import HexPanel from "../components/HexPanel";
import RedLine from "../components/RedLine";
import {
  Box,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box sx={{ display: `grid`, gridTemplateColumns: `1fr 5fr` }}>
        <div>
          <FixedBanner />
        </div>
        <Box>
          <CenteredPanel>
            <div>
              <Heading
                sx={{
                  fontFamily: `'futura-pt', sans-serif`,
                  fontWeight: `500`,
                  fontSize: `15vh`,
                }}
              >
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
              <Heading
                sx={{
                  fontFamily: `'futura-pt', sans-serif`,
                  fontWeight: `500`,
                  fontSize: `15vh`,
                }}
              >
                BAD FOR MOLOCH.
              </Heading>
            </div>
          </CenteredPanel>
          <CenteredPanel>
            <div>
              <Heading
                sx={{
                  fontFamily: `'futura-pt', sans-serif`,
                  fontWeight: `400`,
                  fontSize: `15vh`,
                }}
              >
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

          <CenteredPanel>
            <div>
              <Heading
                sx={{
                  fontFamily: `'futura-pt', sans-serif`,
                  fontWeight: `400`,
                  fontSize: `15vh`,
                }}
              >
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
          <RedLine />
          <CenteredPanel>
            <iframe
              src="https://my.spline.design/realisticsodacancopy-a3a8de6488bfc09d3122f167efec28c0/"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>
          </CenteredPanel>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(/footer.png)`,
          width: `100vw`,
          height: `150px`,
          display: `grid`,
          gridTemplateColumns: `1fr 5fr`,
        }}
      >
        <div></div>
        <Box
          sx={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            width: `80%`,
            margin: `0 auto`,
          }}
        >
          <Box sx={{ display: `flex`, flexDirection: `column`, gap: `1rem` }}>
            <Box sx={{ display: `flex`, gap: `1rem` }}>
              <a href="" rel="noreferrer" target="_blank">
                <Image src="/discord.png" />
              </a>
              <a
                href="https://twitter.com/RaidBrood"
                rel="noreferrer"
                target="_blank"
              >
                <Image src="/twitter.png" />
              </a>
            </Box>
            <Box>
              <Text
                sx={{ color: `white`, fontFamily: `'futura-pt', sans-serif` }}
              >
                Made with ⚔️ for our fellow raiders.
              </Text>
              <Text
                sx={{ color: `white`, fontFamily: `'futura-pt', sans-serif` }}
              >
                <span style={{ fontWeight: `700`, color: `#E0232C` }}>
                  &copy; 2022 Raid Brood.
                </span>{" "}
                All rights reserved.
              </Text>
            </Box>
          </Box>
          <Box
            sx={{
              display: `grid`,
              gridTemplateColumns: `1fr 1fr`,
              placeItems: `center`,
              gap: `1rem`,
            }}
          >
            <Image src="/WoodsBoss.svg" />
            <Image src="/RaidBrood.png" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
