import { Image, Center, VStack } from "@chakra-ui/react";
import { MEDIA_FILES } from "../../utils/constants";

const LogoHeader = (props) => {
  return (
    <VStack w={"100%"} py={"3em"}>
      <Image src={MEDIA_FILES.logos.footer} alt="logo" boxSize={"4xs"} />
      <Center w={"100%"}>
        <Image
          src={props.logo}
          objectFit="contain"
          boxSize={"md"}
          alt="drink logo"
        />
      </Center>
    </VStack>
  );
};

export default LogoHeader;
