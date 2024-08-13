const { db } = require("../utils/connectToDB");

const hotelSearch = async (req, res) => {
  const { query } = req.query;
  try {
    const hotels = await db.Hotel.find({
      name: { $regex: query, $option: "i" },
    });
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = { hotelSearch };
