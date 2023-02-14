import { Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { theme } from "../../styles/theme";

const StyledFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  background-image: url("/assets/hero_banner.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  justify-content: center;
`;
const StyledHeroText = styled(Text)`
  font-family: ${theme.fonts.uncial};
  letter-spacing: 1.2px;
  color: white;
  text-align: center;
`;
const StyledSloganText = styled(Text)`
  font-family: ${theme.fonts.sourceSansPro};
  color: white;
  text-align: center;
  line-height: 24px;
`;

export const Hero = () => {
  return (
    <StyledFlex
      minH={{ lg: "110vh", base: "90vh" }}
      px={{ lg: "8rem", md: "4rem", base: "2rem" }}
    >
      <StyledHeroText
        fontSize={{ lg: "80px", base: "24px" }}
        lineHeight={{ lg: "96px", sm: "32px" }}
      >
        Beer for Slayers of Moloch
      </StyledHeroText>
      <StyledSloganText fontSize={{ lg: "24px", base: "18px" }}>
        Pooling our web3 powers to conspire against Moloch in taverns around the
        world.
      </StyledSloganText>
      <br />
    </StyledFlex>
  );
};
