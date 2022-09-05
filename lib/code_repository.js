import { Client, Exists, Match, Index } from "faunadb";

class CodeRepository {
    constructor() {
        this.client = new Client({
            secret: process.env.FAUNADB_SECRET,
            domain: "db.us.fauna.com",
        });
    }

    async isValid(code) {
        return this.client.query(Exists(Match(Index("mint_codes_by_code"), code)));
    }
}

module.exports = CodeRepository;