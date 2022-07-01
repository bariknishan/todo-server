const express = require('express')
const app = express()

const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3p0gd.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)

app.get('/', (req, res) => {
  res.send('to do')
})

app.listen(port, () => {
  console.log(`todo app listening on hh port ${port}`)
})