const mongoose = require('mongoose');
const User = require('./User');
const Pool = require('./Pool');

const RentalSchema = mongoose.Schema({
  pool: Pool,
  guest: User,
  startDate: Date,
  endDate: Date,
  price: String,
});

const Rental = mongoose.model('Rental', RentalSchema);
module.exports = Rental;
