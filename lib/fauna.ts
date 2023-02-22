import { Client } from "faunadb";

const FaunaDB = () => {
  try {
    const client = new Client({
      secret: process.env.FAUNADB_SECRET,
      domain: "db.us.fauna.com",
      scheme: "https",
    });
    return { client };
  } catch (e) {
    console.error(e.message);
  }

  return null;
};

export { FaunaDB };
