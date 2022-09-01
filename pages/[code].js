import { useRouter } from "next/router";
import {useState} from 'react';
import FixedBanner from "../components/FixedBanner";
import CenteredPanel from "../components/CenteredPanel";
import HexPanel from "../components/HexPanel";
import Footer from "../components/Footer";
import { Box, Heading, Text, OrderedList, ListItem, Input} from "@chakra-ui/react";

export default function RedeemPage(props) {
  const router = useRouter();
  const { code } = router.query;

  const [address, setAddress] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <>
      <Box sx={{ display: `grid`, gridTemplateColumns: `1fr 5fr` }}>
        <div>
          <FixedBanner />
        </div>
        <CenteredPanel>
          <div>
            <Heading
              sx={{
                fontFamily: `'futura-pt', sans-serif`,
                fontWeight: `400`,
                fontSize: `15vh`,
              }}
            >
              CLAIM YOUR{" "}
              <span
                style={{
                  fontFamily: `'futura-pt-bold', sans-serif`,
                  fontWeight: `700`,
                  color: `#E0232C`,
                }}
              >
                NFT.
              </span>
            </Heading>
            <HexPanel>
                <>
                <div>
                    <Heading>How to claim:</Heading>
                    <OrderedList>
                        <ListItem>Enter your public address and secret password.</ListItem>
                        <ListItem>Hit Claim.</ListItem>
                        <ListItem>Welcome to Web3.</ListItem>
                    </OrderedList>
                </div>
                <div style={{display: `flex`, gap: `1rem`, flexDirection: `column`}}>
                    <div>
                    <Text>Enter Public Address</Text>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} sx={{minWidth: `40vw`, width: `100%`}}/>
                    </div>
                    <div>
                    <Text>Enter Secret Password</Text>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} sx={{minWidth: `40vw`, width: `100%`}}/>
                    </div>
                </div>
                </>
            </HexPanel>
          </div>
        </CenteredPanel>
      </Box>
      <Footer />
    </>
  );
}
