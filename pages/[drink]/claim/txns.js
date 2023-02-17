import { useRouter } from "next/router";
import { useState } from "react";
import { useEffectOnce } from "react-use";
import ClipLoader from "react-spinners/ClipLoader";
import FixedBanner from "../../../components/drink/FixedBanner";
import CenteredPanel from "../../../components/drink/CenteredPanel";
import Footer from "../../../components/Footer";
import {
  Box,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Input,
} from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";

export default function RedeemPage(props) {
  const [txns, setTxns] = useState("");

  const supabase = createClient(
    "https://bxhhwnjdfjwbsefxqbig.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4aGh3bmpkZmp3YnNlZnhxYmlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI0ODA5NDQsImV4cCI6MTk3ODA1Njk0NH0.788uNaChjARM3J8JU6OSN5PVj4RBBvi5abMxBXa9X3U"
  );
  const getTxns = async () => {
    try {
      let { data: txns, error } = await supabase.from("txns").select("*");
      console.log({ txns });
      setTxns(txns);
    } catch (error) {
      toast.error("Failed to fetch rows");
    }
  };
  const subtxns = supabase
    .from("txns")
    .on("*", (payload) => {
      console.log("Change received!", payload);
    })
    .subscribe();

  useEffectOnce(() => {
    getTxns();
  });

  return (
    <>
      <Box sx={{ display: `grid`, gridTemplateColumns: `1fr 5fr` }}>
        <div>
          <FixedBanner />
        </div>
        <CenteredPanel>
          <div>
            <Heading>Transactions:</Heading>
            <div
              style={{
                padding: `2rem`,
                border: `1px solid grey`,
                borderRadius: `15px`,
                marginRight: `2rem`,
                display: `flex`,
                flexDirection: `column`,
              }}
            >
              {txns?.length > 0 &&
                txns.map((txn, index) => {
                  return (
                    <Box sx={{ display: `flex`, gap: `1rem` }} key={index}>
                      <div>{txn.id}</div>
                      <div>
                        <div
                          style={{
                            width: `2px`,
                            height: `100%`,
                            backgroundColor: `gray`,
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          fontWeight: `700`,
                          textDecoration: `underline`,
                          color: `#E0232C`,
                        }}
                      >
                        <a
                          href={`https://blockscout.com/xdai/mainnet/tx/${txn.txn_hash}`}
                        >
                          {txn.txn_hash}
                        </a>
                      </div>
                    </Box>
                  );
                })}
            </div>
          </div>
        </CenteredPanel>
      </Box>
      <Footer />
    </>
  );
}
