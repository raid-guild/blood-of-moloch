import { Box, Image } from "@chakra-ui/react";
import styles from "./FixedBanner.module.scss";

export default function FixedBanner(props) {
  return (
    <Box
      className={styles.banner}
    >
      <Image src="/redpil-logo.png" className={styles.image} sx={{ maxHeight: `90vh` }} />
    </Box>
  );
}
