const { MongoClient } = require("mongodb");

//setup database
const URL = "mongodb+srv://nguyenkhnah:khanh123@cluster0.tx8lp.mongodb.net/";
const DATABASE = "Project";

const db = {};

// create connection to database
async function connectToDB() {
  const client = new MongoClient(URL);
  await client.connect();
  const database = client.db(DATABASE);

  //setup collection
  db.Booking = database.collection("Bookings");
  db.Hotel = database.collection("Hotel");
  db.Place = database.collection("Place");

  console.log("Connected to database");
}

module.exports = { connectToDB, db };
