import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const config = {
    GOOGLE_APP_ID: process.env.GOOGLE_APP_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
}

export default config;