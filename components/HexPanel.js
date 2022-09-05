import { Box, Image } from "@chakra-ui/react";
import styles from "./HexPanel.module.scss";

export default function HexPanel(props) {
  return (
    <Box
     className={styles.panel}
    >
      {props.children}
      <Image src="/hex.svg" sx={{ position: `absolute`, left: `5px`, top: `5px` }} />
      <Image src="/hex.svg" sx={{ position: `absolute`, left: `5px`, bottom: `5px` }} />
      <Image src="/hex.svg" sx={{ position: `absolute`, right: `5px`, top: `5px`  }} />
      <Image src="/hex.svg" sx={{ position: `absolute`, right: `5px`, bottom: `5px`  }} />
    </Box>
  );
}
