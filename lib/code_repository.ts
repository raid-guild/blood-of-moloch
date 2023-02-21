import { getFauna } from "./fauna";
import { Exists, Match, Index } from "faunadb";

const useCodeRepository = () => {
  const client = getFauna();

  const isValid = async (code: string) => {
    return client.query(Exists(Match(Index("mint_codes_by_code"), code)));
  };

  return { isValid };
};

export { useCodeRepository };
