import dotenv from "dotenv";

dotenv.config();

const username = process.env.DB_USERNAME || "username";
const password = process.env.DB_PASSWORD;
const db =  process.env.DB;

const constants = {
    MONGO_URL: `mongodb+srv://${username}:${password}@${db}.fd0fgzn.mongodb.net/?retryWrites=true&w=majority`
}

export default constants;