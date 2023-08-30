import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 3000; // Default to 3000 if PORT is not defined in .env
const host = process.env.HOST || "localhost"; // Default to localhost if HOST is not defined in .env

app.listen(port, () => {
    console.log(`Server is running at http://${host}:${port}`);
    console.log("Your GitHub Page: https://cmderr0r.github.io/");
});
