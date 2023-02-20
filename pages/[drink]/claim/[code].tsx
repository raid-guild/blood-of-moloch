import { useRouter } from "next/router";
import { useState } from "react";
import CenteredPanel from "../../../components/drink/CenteredPanel";
import HexPanel from "../../../components/HexPanel";
import Footer from "../../../components/Footer";
import {
  Box,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Input,
  Button,
  useToast,
  VStack,
  Center,
} from "@chakra-ui/react";
import styles from "../../../styles/Home.module.scss";
import { ethers } from "ethers";
import Badge from "../../../components/drink/Badge";

const Claim = () => {
  const router = useRouter();
  const toast = useToast();
  const { drink, code } = router.query;

  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const submitData = async () => {
    const data = {
      address,
      password,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };
    try {
      const res = await fetch(`/api/code/${drink}/${code}/claim`, options);
      const response = await res.json();
      console.log(response);
      if (response.error) {
        throw response.error;
      } else if (response?.status == 1) {
        toast({
          title: "Claim successful",
          description: `You got a ${drink} NFT`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setIsLoading(false);
        setIsSuccessful(true);
      }
    } catch (error) {
      toast({
        title: "Claim failed",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };

  console.log(`Page for claiming ${drink} with code ${code}`);

  return (
    <>
      <VStack w="100%">
        <Center w={"100%"} py={"3em"}>
          <Heading className={styles.heading}>
            CLAIM YOUR
            <span
              style={{
                fontFamily: `'futura-pt-bold', sans-serif`,
                fontWeight: `700`,
                color: `#E0232C`,
              }}
            >
              {` ${drink} `}
            </span>
            NFT.
          </Heading>
        </Center>
        <Center py={"3em"}>
          <HexPanel>
            <>
              <div>
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
                <div>
                  <Text>Enter Public Address</Text>
                  <Input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    sx={{ minWidth: `40vw`, width: `100%` }}
                  />
                  {address.length > 0 && !ethers.utils.isAddress(address) ? (
                    <Text color="red">Not a valid address</Text>
                  ) : null}
                </div>
                <div>
                  <Text>Enter Secret Password</Text>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ minWidth: `40vw`, width: `100%` }}
                  />
                </div>
                <Button
                  sx={{
                    padding: `2ex 2em`,
                    margin: `1ex 0`,
                    backgroundColor: `#E0232C`,
                    color: `white`,
                    textAlign: `center`,
                    borderRadius: `6px`,
                  }}
                  onClick={() => submitData()}
                >
                  Claim
                </Button>
              </div>
            </>
          </HexPanel>
        </Center>
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
              backgroundColor: `rgba(0,0,0,0.1)`,
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
                gap: `1rem`,
              }}
            >
              <Heading className={styles.heading}>Attempting Claim...</Heading>
            </Box>
          </Box>
        )}
        {isSuccessful && (
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
              backgroundColor: `rgba(0,0,0,0.1)`,
            }}
            onClick={() => setIsSuccessful(false)}
          >
            <Box
              sx={{
                backgroundColor: `white`,
                border: `1px solid grey`,
                borderRadius: `15px`,
                padding: `2rem`,
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                justifyContent: `center`,
                gap: `1rem`,
              }}
            >
              <Heading className={styles.heading}>NFT Minted</Heading>
              <Badge path={`/assets/drink/${drink}/badge.png`} />
            </Box>
          </Box>
        )}
      </VStack>
      <Footer />
    </>
  );
};

export default Claim;
