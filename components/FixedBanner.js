import { Box, Image } from "@chakra-ui/react";

export default function FixedBanner(props) {
  return (
    <Box sx={{position: `fixed`, display: `flex`, flexDirection: `column`, justifyContent: `center`, height: `100vh`}}>
        <Image src="/redpil-logo.png" sx={{maxHeight: `90vh`}} />
    </Box>
  );
}
