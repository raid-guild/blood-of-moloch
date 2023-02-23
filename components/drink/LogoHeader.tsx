import { Image, Center, VStack, HStack, Spacer } from "@chakra-ui/react";
import { MEDIA_FILES } from "../../utils/constants";

const LogoHeader = ({ path }) => {
  return (
    <VStack w={"100%"} py={"3em"} bgGradient="linear(to-b, #2b2c34, black)">
      <HStack w={"80%"}>
        <Image src={MEDIA_FILES.logos.footer} alt="logo" boxSize={"4xs"} />
        <Spacer />
        <HStack justifyContent={"flex-end"}>
          <Image
            src={MEDIA_FILES.icons.discord}
            alt="discord"
            w={{ lg: "32px", base: "18px" }}
            mr=".5rem"
            cursor="pointer"
            onClick={() =>
              window.open("https://discord.gg/XKGM8u8XTQ", "_blank")
            }
          />
          <Image
            src={MEDIA_FILES.icons.twitter}
            alt="twitter"
            w={{ lg: "32px", base: "18px" }}
            cursor="pointer"
            onClick={() =>
              window.open("https://twitter.com/RaidBrood", "_blank")
            }
          />
        </HStack>
      </HStack>

      <Center>
        <Image src={path} objectFit="contain" boxSize={"md"} alt="drink logo" />
      </Center>
    </VStack>
  );
};

export default LogoHeader;
