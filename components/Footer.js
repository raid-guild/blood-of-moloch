import { Text, Box, Image } from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <Box
      sx={{
        backgroundImage: `${props.logo}`,
        width: `100vw`,
        height: `150px`,
        display: `grid`,
        gridTemplateColumns: `1fr 5fr`,
        zIndex: `3`,
        position: `relative`,
      }}
    >
      <div></div>
      <Box
        sx={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
          width: `80%`,
          margin: `0 auto`,
        }}
      >
        <Box sx={{ display: `flex`, flexDirection: `column`, gap: `1rem` }}>
          <Box sx={{ display: `flex`, gap: `1rem` }}>
            <a
              href="https://discord.gg/9DwhnHQk"
              rel="noreferrer"
              target="_blank"
            >
              <Image src="/discord.png" alt={"Discord"} />
            </a>
            <a
              href="https://twitter.com/RaidBrood"
              rel="noreferrer"
              target="_blank"
            >
              <Image src="/twitter.png" alt={"Twitter"} />
            </a>
          </Box>
          <Box>
            <Text
              sx={{ color: `white`, fontFamily: `'futura-pt', sans-serif` }}
            >
              Made with ⚔️ for our fellow raiders.
            </Text>
            <Text
              sx={{ color: `white`, fontFamily: `'futura-pt', sans-serif` }}
            >
              <span style={{ fontWeight: `700`, color: `#E0232C` }}>
                &copy; 2022 Raid Brood.
              </span>{" "}
              All rights reserved.
            </Text>
          </Box>
        </Box>
        <Box
          sx={{
            display: `grid`,
            gridTemplateColumns: `1fr 1fr`,
            placeItems: `center`,
            gap: `1rem`,
          }}
        >
          <Image src="/WoodsBoss.svg" alt={"WoodsBossLogo"} />
          <Image src="/RaidBrood.png" alt={"RaidBroodLogo"} />
        </Box>
      </Box>
    </Box>
  );
}
