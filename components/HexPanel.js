import { Box, Image } from "@chakra-ui/react";
import styles from "./HexPanel.module.scss";

export default function HexPanel(props) {
  let src = "/hex.svg";
  let alt = "hexBolt";
  return (
    <Box className={styles.panel}>
      {props.children}
      <Image
        src={src}
        sx={{ position: `absolute`, left: `5px`, top: `5px` }}
        alt={alt}
      />
      <Image
        src={src}
        sx={{ position: `absolute`, left: `5px`, bottom: `5px` }}
        alt={alt}
      />
      <Image
        src={src}
        sx={{ position: `absolute`, right: `5px`, top: `5px` }}
        alt={alt}
      />
      <Image
        src={src}
        sx={{ position: `absolute`, right: `5px`, bottom: `5px` }}
        alt={alt}
      />
    </Box>
  );
}
