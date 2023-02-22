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
  Stack,
  Spacer,
} from "@chakra-ui/react";
import styles from "../../../styles/Home.module.scss";
import { ethers } from "ethers";
import Badge from "../../../components/drink/Badge";
import { ClaimData } from "../../api/[drink]/[code]/claim";
import { theme } from "../../../styles/theme";
import Drinks from "../../api/drinks.json";

const Claim = () => {
  const router = useRouter();
  const toast = useToast();
  const { drink, code } = router.query;

  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const copy = Drinks[drink as string];
  // TODO route to 404 or home
  if (!copy) {
    return <Center>Ooopss...</Center>;
  }

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

    await fetch(`/api/${drink}/${code}/claim`, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.error) {
          toast({
            title: "Claim failed",
            description: json.error,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
        } else if (json?.status == 1) {
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
      })
      .catch((e) => {
        toast({
          title: "Claim failed",
          description: e,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setIsLoading(false);
      });
  };

  console.log(`Page for claiming ${drink} with code ${code}`);

  return (
    <Box h="calc(100vh)">
      <VStack bgGradient="linear(to-b, black, #2b2c34)">
        <Center w={"100%"} py={"3em"}>
          <Heading fontFamily={theme.fonts.uncial}>
            {`CLAIM YOUR ${copy.name.toUpperCase()} NFT.`}
          </Heading>
        </Center>
        <Stack w={"80%"} direction={["column", "row"]}>
          <VStack alignContent={"space-around"} maxW={"350px"} margin={"auto"}>
            <Heading fontFamily={theme.fonts.uncial} size={"md"}>
              How to claim
            </Heading>{" "}
            <OrderedList>
              <ListItem>
                Enter your public address and secret password.
              </ListItem>
              <ListItem>Hit Claim.</ListItem>
              <ListItem>Welcome to Web3.</ListItem>
            </OrderedList>
          </VStack>

          <Spacer />

          <VStack w={"100%"} maxW={"600px"}>
            <Heading fontFamily={theme.fonts.uncial} size={"md"}>
              Enter your wallet address
            </Heading>
            <Input
              w={"100%"}
              maxW={"750px"}
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
              disabled={isLoading}
              w={"100%"}
              maxW={"750px"}
              onClick={() => submitData()}
            >
              Claim
            </Button>
          </VStack>
        </Stack>
      </VStack>
      <Footer />
    </Box>
  );
};

export default Claim;
