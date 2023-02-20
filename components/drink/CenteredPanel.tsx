import { Box } from "@chakra-ui/react";
import styles from "./CenteredPanel.module.scss";

type CenteredPanelProps = {
  onMouseEnter?: () => void;
  customRef: any;
  children: any;
};
const CenteredPanel = ({
  children,
  customRef,
  onMouseEnter,
}: CenteredPanelProps) => {
  return (
    <Box ref={customRef} className={styles.panel} onMouseEnter={onMouseEnter}>
      {children}
    </Box>
  );
};

export default CenteredPanel;
