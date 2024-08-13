const Booking = require("../schema/bookingSchema");

const bookingController = async (req, res) => {
  try {
    const {
      destination,
      guestName,
      phoneNumber,
      checkin,
      checkout,
      room,
      adult,
      children,
    } = req.body;
    const newBooking = await Booking.create({
      destination,
      guestName,
      phoneNumber,
      checkin,
      checkout,
      room,
      adult,
      children,
    });
    res.status(201).json({
      data: newBooking,
      msg: "Create completed",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Có lỗi từ máy chủ",
      data: null,
    });
  }
};

module.exports = bookingController;
