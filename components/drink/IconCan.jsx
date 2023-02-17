import { SimpleGrid, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

const StyledContainer = styled(SimpleGrid)`
  grid-gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
`;

const IconCan = (props) => {
  return (
    <StyledContainer
      px={{ lg: "8rem", md: "4rem", base: "2rem" }}
      columns={{ base: 1, md: 2, lg: 2 }}
    >
      <Image
        src={props.icon}
        w={{ lg: "250px", md: "250px", base: "200px" }}
        alt="icon"
        mx="auto"
      />
      <Image src={props.can} alt="can" />
    </StyledContainer>
  );
};

export default IconCan;
