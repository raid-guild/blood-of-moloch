import { Box, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const StyledHeading = styled(Text)`
  width: 70%;
  font-family: ${theme.fonts.uncial};
  color: white;
  text-align: left;
  margin-bottom: 1rem;
`;
const StyledBodyText = styled(Text)`
  font-family: ${theme.fonts.sourceSansPro};
  letter-spacing: 1.2px;
  color: white;
  text-align: left;
`;
const Lore = (props) => {
  return (
    <VStack w={"100%"} bgColor={"black"} py={"5em"}>
      <StyledHeading fontSize={{ lg: "64px", base: "20px" }}>
        Lore
      </StyledHeading>
      <Box w={"70%"}>
        <StyledBodyText fontSize={{ lg: "18px", base: "12px" }}>
          {props.lore.first}
        </StyledBodyText>
        <br />
        <StyledBodyText fontSize={{ lg: "18px", base: "12px" }}>
          {props.lore.second}
        </StyledBodyText>
      </Box>
    </VStack>
  );
};

export default Lore;
