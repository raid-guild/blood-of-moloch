import { FaunaDB } from "./fauna";
import { Exists, Match, Index } from "faunadb";

const useCodeRepository = () => {
  const client = FaunaDB();

  const isValid = async ({ code, drink }: { code: string; drink: string }) => {
    let queryIndex: string;
    switch (drink) {
      case "redpil":
        queryIndex = "red_pil_codes_by_code";
        break;
      case "greenpil":
        queryIndex = "green_pil_codes_by_code";
        break;
      case "sporkandsour":
        queryIndex = "spork_sour_codes_by_code";
        break;
      case "seoulbound":
        queryIndex = "seoul_bound_codes_by_code";
        break;
      default:
        return;
    }
    if (!client || !queryIndex) {
      return;
    }

    console.log(
      `Calling FaunaDB with ${code} for ${drink} using ${queryIndex}`
    );
    const response = await client.query(Exists(Match(Index(queryIndex), code)));

    console.log("Response: ", response);
    return response;
  };

  return { isValid };
};

export { useCodeRepository };
