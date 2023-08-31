import dotenv from "dotenv";

dotenv.config();

const username = process.env.DB_USERNAME || "username";
const password = process.env.DB_PASSWORD || "password";
const db = process.env.DB || "mongoDB";

const constants = {
    MONGO_URL: `mongodb+srv://${username}:${password}@${db}.fd0fgzn.mongodb.net/?retryWrites=true&w=majority`
}

export default constants;