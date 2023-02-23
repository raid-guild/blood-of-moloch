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
  margin-top: 1rem;
`;

const StyledBodyText = styled(Text)`
  font-family: ${theme.fonts.sourceSansPro};
  letter-spacing: 1.2px;
  color: white;
  text-align: left;
`;

const StyledBox = styled(Box)`
  margin-bottom: 3rem;
  border-radius: 6px;
  :hover {
    background-color: ${theme.colors.blackDark};
  }
`;

export const Beers = () => {
  return (
    <StyledContainer px={{ lg: "8rem", md: "4rem", base: "2rem" }}>
      <StyledHeading fontSize={{ lg: "42px", base: "30px" }}>
        Our Brood
      </StyledHeading>
      <StyledBodyText fontSize={{ lg: "18px", base: "12px" }}>
        At RaidBrood, brews are our weapons in the fight against Moloch. Armed
        with grains, hops, yeast and water, our master brewers are practiced in
        the arts and sciences of brewish battle. This is our arsenal.
      </StyledBodyText>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2, xl: 2 }} gap={10}>
        {BEER_CONTENT.map((beer, index) => (
          <StyledBox
            key={index}
            minH={{ xl: "585px", lg: "525px", md: "425px", sm: "450px" }}
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
                <Image src={beer.label} alt="cans" maxH="100%" />
                <StyledCardText
                  color="#B66AD6"
                  fontSize={{ lg: "16px", base: "16px" }}
                >
                  {beer.description}
                </StyledCardText>
              </StyledCard>
            </Link>
          </StyledBox>
        ))}
      </SimpleGrid>
    </StyledContainer>
  );
};
