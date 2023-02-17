import { Box, Image } from "@chakra-ui/react";
import styles from "./FixedBanner.module.scss";

export default function FixedBanner(props) {
  return (
    <Box className={styles.banner} sx={{ zIndex: `4` }}>
      <Image
        src={props.logo}
        className={styles.image}
        alt={"logo"}
        sx={{ maxHeight: `90vh` }}
      />
    </Box>
  );
}
