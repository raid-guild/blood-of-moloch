import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { PopupButton } from "@typeform/embed-react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const StyledContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  background-color: #2b2c34;
  padding-bottom: 2rem;
`;
const StyledHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  line-height: 72px;
  color: white;
  text-align: left;
  margin: 1rem 0 4rem 0;
`;
const StyledBodyText = styled(Text)`
  font-family: ${theme.fonts.sourceSansPro};
  letter-spacing: 1.2px;
  color: white;
  text-align: left;
  margin-bottom: 1rem;
`;

const StyledPopupButton = styled(PopupButton)`
  font-family: ${theme.fonts.sourceSansPro};
  color: white;
  background-color: #ff3864;
  font-size: 20px;
  border-radius: 5px;
  padding: 10px 33px;
  margin-top: 2rem;
  :hover {
    opacity: 0.85;
  }
`;

const StyledLink = styled.a`
  color: #ff3864;
  opacity: 1;
  :hover {
    opacity: 0.85;
  }
`;

export const Brew = () => {
  return (
    <StyledContainer px={{ lg: "8rem", md: "4rem", base: "2rem" }}>
      <Flex w="100%" direction="column" justifyContent="space-between">
        <StyledHeading fontSize={{ xl: "54px", lg: "44px", base: "30px" }}>
          Brew a Batch
        </StyledHeading>
        <StyledBodyText fontSize={{ lg: "18px", base: "12px" }}>
          RaidBrood brews custom batches for communities, conferences, and other
          events. Example brew collaborators include{" "}
          <StyledLink href="https://greenpill.party/">
            GreenPill Podcast
          </StyledLink>{" "}
          and{" "}
          <StyledLink href="https://www.sporkdao.org/">
            SporkDAO/ETHDenver 2023
          </StyledLink>
          .
        </StyledBodyText>
        <StyledBodyText fontSize={{ lg: "18px", base: "12px" }}>
          Do you want to join us in the endeavour of exlixir to fuel our fight
          against Moloch by making a batch for you?
        </StyledBodyText>
      </Flex>
      <StyledPopupButton id="IGJVI7XW" className="my-button">
        Contact Us
      </StyledPopupButton>
    </StyledContainer>
  );
};
