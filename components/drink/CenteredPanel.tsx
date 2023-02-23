import { Center } from "@chakra-ui/react";

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
    <Center ref={customRef} onMouseEnter={onMouseEnter}>
      {children}
    </Center>
  );
};

export default CenteredPanel;
