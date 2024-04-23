import express from "express";
import { connectToDatabase } from "./src/services/database.service";
import { infoRouter } from "./src/routes/info.router";
import {app} from './server';

//GET
connectToDatabase()
.then(() => {
  app.use("/info", infoRouter);

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
})
.catch((error : Error) => {
  console.error("Database connection failed", error);
  process.exit();
});










// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri = "mongodb+srv://DP:QG3V7suC$zjm@firecluster.d63q8hg.mongodb.net/?retryWrites=true&w=majority&appName=FireCluster";

// async function getCitiesInfo() {
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     const database = client.db('cities');
//     const citiesInfo = database.collection('info');

//     // Query for a city
//     const query = { city: 'Torrance' };
//     const city = await citiesInfo.findOne(query);

//     return city;
//   } finally {
//     await client.close();
//   }
// }

// module.exports = { getCitiesInfo };

