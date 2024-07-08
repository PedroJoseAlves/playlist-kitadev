require("dotenv").config();

const express = require('express')
const connectToDb= require("./database/db")

const app = express()

const port = process.env.PORT || 5000;

connectToDb();

app.get('/hello', (req, res) => {
    res.send("Pedro Alves")
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`))