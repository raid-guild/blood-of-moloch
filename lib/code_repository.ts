import { FaunaDB } from "./fauna";
import { Exists, Match, Index } from "faunadb";
import { DrinkDbData } from "../pages/api/[drink]/[code]/is_claimed";

const useCodeRepository = () => {
  const { client } = FaunaDB();

  const isValid = async ({ code, drink }: DrinkDbData) => {
    let queryIndex: string;
    switch (drink) {
      case "red-pil":
        queryIndex = "red_pil_codes_by_code";
        break;
      case "green-pil":
        queryIndex = "green_pil_codes_by_code";
        break;
      case "spork-sour":
        queryIndex = "spork_sour_codes_by_code";
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
