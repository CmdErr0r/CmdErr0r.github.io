import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
app.listen(port, () => {
    console.log(`Server is running at http://${host}:${port}`);
    console.log("Your GitHub Page: https://cmderr0r.github.io/");
});
