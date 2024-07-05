/*const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://punithsanthosh10:Superkings10@cluster0.h2xmjf3.mongodb.net/?appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
module.exports = client;*/
const mongoose = require("mongoose");
module.exports = mongoose;
