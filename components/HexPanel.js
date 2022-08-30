import { Box, Image } from "@chakra-ui/react";

export default function HexPanel(props) {
  return (
    <Box
      style={{
        position: `relative`,
        display: `grid`,
        gridTemplateColumns: `1fr 1fr`,
        border: `5px solid #EBEBEB`,
        borderRadius: `15px`,
        padding: `35px`,
        width: `80vw`,
        placeItems: `center`,
        height: `50vh`,
      }}
    >
      {props.children}
      <Image src="/hex.svg" sx={{ position: `absolute`, left: `5px`, top: `5px` }} />
      <Image src="/hex.svg" sx={{ position: `absolute`, left: `5px`, bottom: `5px` }} />
      <Image src="/hex.svg" sx={{ position: `absolute`, right: `5px`, top: `5px`  }} />
      <Image src="/hex.svg" sx={{ position: `absolute`, right: `5px`, bottom: `5px`  }} />
    </Box>
  );
}
