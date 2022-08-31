import { Box } from "@chakra-ui/react";

export default function CenteredPanel(props) {
  return (
    <Box
    ref={props?.customRef}
    onMouseEnter={props?.onMouseEnter}
      sx={{
        display: `grid`,
        width: `100%`,
        height: `100vh`,
        alignItems: `center`
      }}
    >
      {props.children}
    </Box>
  );
}
