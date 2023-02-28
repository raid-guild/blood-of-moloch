import { useRouter } from "next/router";
import { Footer } from "../../../shared/Footer";
import { Box, Heading, VStack, Center } from "@chakra-ui/react";
import Label from "../../../components/drink/Label";

const Claim = () => {
  const router = useRouter();
  const { drink } = router.query;

  return (
    <Box h={"100vh"} bgColor={" #2b2c34"}>
      <VStack bgGradient="linear(to-b, black, #2b2c34)" spacing={"3em"}>
        <Center>
          <Heading mt={"3em"}>{`CLAIM YOUR PROOF OF DRINK NFT.`}</Heading>
        </Center>
        <Center>Ooopss... No code?</Center>
      </VStack>{" "}
      <Footer />
    </Box>
  );
};

export default Claim;
