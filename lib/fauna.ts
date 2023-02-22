import { Client } from "faunadb";

const getFauna = () => {
  return new Client({
    secret: process.env.FAUNADB_SECRET,
    domain: "db.us.fauna.com",
    scheme: "https",
  });
};

export { getFauna };
