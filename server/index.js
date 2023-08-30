import express from "express"
import "dotenv"

const app = express()

const port = process.env.PORT
console.log(port)
const host = process.env.HOST

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`)
    console.log(`https://cmderr0r.github.io/`)
})