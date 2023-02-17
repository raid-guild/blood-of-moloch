import { Box } from "@chakra-ui/react";
import styles from "./CenteredPanel.module.scss";
export default function CenteredPanel(props) {
  return (
    <Box
    ref={props?.customRef}
    onMouseEnter={props?.onMouseEnter}
    className={styles.panel}
    >
      {props.children}
    </Box>
  );
}
