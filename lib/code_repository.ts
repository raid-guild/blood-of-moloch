import { Client, Exists, Match, Index } from "faunadb";

const client = new Client({
  secret: process.env.FAUNADB_SECRET,
  domain: "db.us.fauna.com",
});

const useCodeRepository = () => {
  const isValid = async (code: string) => {
    return client.query(Exists(Match(Index("mint_codes_by_code"), code)));
  };

  return { isValid };
};

export { useCodeRepository };
