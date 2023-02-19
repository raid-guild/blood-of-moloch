import { Box } from "@chakra-ui/react";
import styles from "./CenteredPanel.module.scss";
export default function CenteredPanel(props) {
  return <Box className={styles.panel}>{props.children}</Box>;
}
