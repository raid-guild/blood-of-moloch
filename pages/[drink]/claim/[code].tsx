import { useRouter } from "next/router";
import { useState } from "react";
import { Footer } from "../../../shared/Footer";
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
  Spacer,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import Badge from "../../../components/drink/Badge";
import { ClaimData } from "../../api/[drink]/[code]/claim";
import Drinks from "../../api/drinks.json";

const Claim = () => {
  const router = useRouter();
  const toast = useToast();
  const { drink, code } = router.query;

  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);
  const [txReceipt, setTxReceipt] = useState();
  const copy = Drinks[drink as string];

  // TODO route to 404 or home
  if (!copy) {
    return <Center>Ooopss...</Center>;
  }

  console.log("loading: ", isLoading);
  console.log("successful: ", isSuccessful);
  console.log("alreadyClaimed: ", alreadyClaimed);

  const ClaimInput = () => {
    return (
      <VStack w={"100%"} maxW={"600px"}>
        <Heading size={"md"}>Enter your wallet address</Heading>
        <Input
          w={"100%"}
          maxW={"600px"}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          borderRadius={"0"}
        />
        {address.length > 0 && !ethers.utils.isAddress(address) ? (
          <Text color="red">Not a valid address</Text>
        ) : null}
        <Button
          bgGradient={"linear(to-r, #EC4899, #7C3AED)"}
          borderRadius={"0"}
          disabled={isLoading || alreadyClaimed}
          w={"100%"}
          maxW={"600px"}
          onClick={() => submitData()}
          isLoading={isLoading}
        >
          {alreadyClaimed ? "ALREADY CLAIMED" : "CLAIM"}
        </Button>
      </VStack>
    );
  };

  const submitData = async () => {
    const data: ClaimData = {
      address,
      drink: drink as string,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };

    console.log("POST: ", options);
    setIsLoading(true);

    await fetch(`/api/${drink}/${code}/claim`, options)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        if (json.error === "Code already claimed.") {
          console.error(json.error);
          toast({
            status: "error",
            title: "Oops",
            description: json.error,
            duration: 3000,
          });
          setAlreadyClaimed(true);
        } else if (json.error === "Code cannot be validated.") {
          console.error(json.error);
          toast({
            status: "error",
            title: "Oops",
            description: json.error,
            duration: 3000,
          });
        } else if (json?.status == 1) {
          toast({
            status: "success",
            title: "Proof of drink minted",
            duration: 3000,
          });
          setIsSuccessful(true);
          setTxReceipt(json);
        }
      })
      .then(() => setIsLoading(false))
      .catch((e) => {
        setIsLoading(false);
      });
  };

  console.log(
    `Page for claiming ${drink} with code ${code} on ${process.env.NEXT_APP_NETWORK}`
  );

  return (
    <Box h={"100vh"} bgColor={" #2b2c34"}>
      <VStack bgGradient="linear(to-b, black, #2b2c34)" spacing={"3em"}>
        <Center>
          <Heading mt={"3em"}>
            {`CLAIM YOUR ${copy.name.toUpperCase()} NFT.`}
          </Heading>
        </Center>
        <VStack w={"100%%"} direction={["column", "row"]} spacing={"3em"}>
          <VStack maxW={"350px"}>
            <Heading size={"md"}>How to claim</Heading>{" "}
            <OrderedList>
              <ListItem>
                Enter your public address and secret password.
              </ListItem>
              <ListItem>Hit Claim.</ListItem>
              <ListItem>Welcome to Web3.</ListItem>
            </OrderedList>
          </VStack>

          <Spacer />

          {txReceipt ? (
            <>
              <Heading size={"md"}>Proof of Drink minted </Heading>{" "}
              <Badge
                path={`/assets/drink/${drink}/badge.png`}
                bgColor={"transparent"}
              />
            </>
          ) : (
            <ClaimInput />
          )}
        </VStack>
      </VStack>{" "}
      <Spacer />
      <Footer />
    </Box>
  );
};

export default Claim;
