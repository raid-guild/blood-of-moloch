import { useRouter } from "next/router";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import FixedBanner from "../../../components/redpil/FixedBanner";
import CenteredPanel from "../../../components/redpil/CenteredPanel";
import HexPanel from "../../../components/redpil/HexPanel";
import Footer from "../../../components/redpil/Footer";
import {
  Box,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Input,
} from "@chakra-ui/react";
import styles from "../../../styles/Home.module.scss";

export default function RedeemPage(props) {
  const router = useRouter();
  const { code } = router.query;

  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitData = async () => {
    setIsLoading(true);
    const data = {
      address,
      password,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };
    const response = await fetch(`/api/code/${code}/claim`, options);
    console.log({ response });
    setIsLoading(false);
  };
  
  return (
    <>
      <Box sx={{ display: `grid`, gridTemplateColumns: `1fr 5fr` }}>
        <div>
          <FixedBanner />
        </div>
        <CenteredPanel>
          <div>
            <Heading className={styles.heading}>
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
                <div style={{fontFamily: `'futura-pt'`}}>
                  <Heading>How to claim:</Heading>
                  <OrderedList>
                    <ListItem>
                      Enter your public address and secret password.
                    </ListItem>
                    <ListItem>Hit Claim.</ListItem>
                    <ListItem>Welcome to Web3.</ListItem>
                  </OrderedList>
                </div>
                <div
                  style={{
                    display: `flex`,
                    gap: `1rem`,
                    flexDirection: `column`,
                  }}
                >
                  <div style={{fontFamily: `'futura-pt'`}}>
                    <Text>Enter Public Address</Text>
                    <Input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      sx={{ minWidth: `40vw`, width: `100%` }}
                    />
                  </div>
                  <div>
                    <Text>Enter Secret Password</Text>
                    <Input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      sx={{ minWidth: `40vw`, width: `100%` }}
                    />
                  </div>
                  <Box
                    sx={{
                      padding: `2ex 2em`,
                      margin: `1ex 0`,
                      backgroundColor: `#E0232C`,
                      color: `white`,
                      textAlign: `center`,
                      borderRadius: `6px`,
                      fontFamily: `'futura-pt'`
                    }}
                    onClick={() => submitData()}
                  >
                    Claim
                  </Box>
                </div>
              </>
            </HexPanel>
          </div>
        </CenteredPanel>
      </Box>
      {isLoading && (
        <Box
          sx={{
            position: `fixed`,
            width: `100vw`,
            height: `100vh`,
            display: `grid`,
            placeItems: `center`,
            left: `0`,
            top: `0`,
            zIndex: `10`,
            backgroundColor: `rgba(0,0,0,0.1)`
          }}
        >
          <Box
            sx={{
              backgroundColor: `white`,
              border: `1px solid grey`,
              borderRadius: `15px`,
              width: `50vw`,
              height: `50vh`,
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
              justifyContent: `center`,
              gap: `1rem`
            }}
          >
            <Heading className={styles.heading}>Attempting Claim...</Heading>
            <ClipLoader />
          </Box>
        </Box>
      )}
      <Footer />
    </>
  );
}
