import { Flex, Image, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MEDIA_FILES } from "../utils/constants";

const StyledContainer = styled(Flex)`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  top: 24px;
`;

export const Header = () => {
  return (
    <StyledContainer px={{ lg: "8rem", md: "4rem", base: "2rem" }} pt={4} position="relative">
      <Link href="/" display="flex" justifyContent="center" mx="auto">
        <Image
          src={MEDIA_FILES.logos.header}
          alt="logo"
          w={{ lg: "170px", base: "100px" }}
        />
      </Link>

      <Flex direction="row" alignItems="center" position="absolute" right gap={2}>
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
      </Flex>
    </StyledContainer>
  );
};
