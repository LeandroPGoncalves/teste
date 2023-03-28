require("dotenv").config()
const express = require("express")
const app = express()

const routes = require("./src/routes")

const PORT = process.env.PORT;

app.use(express.json());
app.use(routes)

app.listen(PORT, () => console.log(`App Listening on http://localhost:${PORT}`))


