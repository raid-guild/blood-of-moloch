const { Client, Exists, Match, Index } = require("faunadb");

class CodeRepository {
    constructor() {
        this.client = new Client({
            secret: process.env.FAUNADB_SECRET,
            domain: "db.us.fauna.com",
        });
    }

    async isValid(code) {
        return this.client.query(Exists(Match(Index("codes_by_code"), code)));
    }
}

module.exports = CodeRepository;