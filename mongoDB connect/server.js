// import { MongoClient } from "mongodb";
// const dns = require('dns');
// dns.setDefaultResultOrder('ipv4first');
// dns.setServers(['8.8.8.8', '8.8.4.4']);

// const url =
//   "mongodb+srv://node-login:NaitikMongoDB@cluster0.qruggak.mongodb.net/?appName=Cluster0";

// const client = new MongoClient(url);

// const dbName = "node-login";

// async function main() {
//   try {
//     await client.connect();

//     console.log("Connected to MongoDB");

//     const db = client.db(dbName);

//     console.log("Database selected:", dbName);

//   } catch (error) {
//     console.error("MongoDB Error:", error);
//   }
// }

// main();

import { MongoClient } from "mongodb";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const url ="mongodb+srv://node-login:NaitikMongoDB@cluster0.qruggak.mongodb.net/?appName=Cluster0";

const client = new MongoClient(url);
const dbName = "node-login";

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    console.log("Database selected:", dbName); 
  } catch (error) {
    console.error("MongoDB Error:", error);
  } finally {
    await client.close();
  }
}

main();