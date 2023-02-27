import { Link, Image, Center, VStack, HStack, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import { MEDIA_FILES } from "../../utils/constants";

const LogoHeader = ({ path }) => {
  return (
    <VStack w={"100%"} py={"3em"} bgGradient="linear(to-b, #2b2c34, black)">
      <HStack w={"80%"}>
        <NextLink href="/" passHref>
          <Link>
            <Image src={MEDIA_FILES.logos.footer} alt="logo" boxSize={"4xs"} />
          </Link>
        </NextLink>
        <Spacer />
        <HStack justifyContent={"flex-end"} gap={2}>
          <Link href="https://discord.gg/XKGM8u8XTQ" isExternal>
            <Image
              src={MEDIA_FILES.icons.discord}
              alt="discord"
              w={{ lg: "32px", base: "18px" }}
            />
          </Link>
          <Link href="https://twitter.com/RaidBrood" isExternal>
            <Image
              src={MEDIA_FILES.icons.twitter}
              alt="twitter"
              w={{ lg: "32px", base: "18px" }}
            />
          </Link>
        </HStack>
      </HStack>

      <Center>
        <Image src={path} objectFit="contain" boxSize={"md"} alt="drink logo" />
      </Center>
    </VStack>
  );
};

export default LogoHeader;
