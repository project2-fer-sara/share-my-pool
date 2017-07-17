const mongoose = require('mongoose');

const RentalSchema = mongoose.Schema({
  pool: {pool_id},
  guest: {user_id},
  startDate: Date,
  endDate: Date,
  price: String,
});

const Rental = mongoose.model('Rental', RentalSchema);
module.exports = Rental;
