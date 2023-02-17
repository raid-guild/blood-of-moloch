import { Flex, SimpleGrid, Text, Image, Box, Link } from "@chakra-ui/react";

import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { BEER_CONTENT } from "../../utils/constants";

const StyledContainer = styled(Flex)`
  flex-direction: column;
  background: linear-gradient(180deg, #0f0f0e 38.61%, #2b2c34 87.02%);
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const StyledHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  line-height: 72px;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
`;
const StyledCard = styled(Flex)`
  width: 100%;
  position: absolute;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px 24px;
  :hover {
    background-color: ${theme.colors.blackDark};
  }
`;
const StyledCardHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  line-height: 40px;
  color: ${theme.colors.red};
  text-align: center;
`;
const StyledCardText = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.sourceSansPro};
  color: ${(color) => color};
  text-align: left;
  margin-bottom: 1rem;
`;

export const Beers = () => {
  return (
    <StyledContainer px={{ lg: "8rem", md: "4rem", base: "2rem" }}>
      <StyledHeading fontSize={{ lg: "32px", base: "20px" }}>
        Our Beer
      </StyledHeading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 3 }} gap={10}>
        {BEER_CONTENT.map((beer, index) => (
          <Box
            key={index}
            minH={{ xl: "525px", lg: "525px", md: "525px", sm: "450px" }}
            position="relative"
            cursor="pointer"
          >
            <Link href={beer.path}>
              <StyledCard h="100%" key={index}>
                <StyledCardHeading
                  minH={{ lg: "75px", sm: "40px" }}
                  fontSize={{ lg: "36px", base: "16px" }}
                >
                  {beer.title}
                </StyledCardHeading>
                <Image src={beer.canImage} alt="cans" maxH="100%" />
                <StyledCardText
                  fontWeight="bold"
                  color="#B66AD6"
                  fontSize={{ lg: "16px", base: "16px" }}
                >
                  {beer.description}
                </StyledCardText>
              </StyledCard>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </StyledContainer>
  );
};