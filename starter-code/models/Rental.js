const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RentalSchema = mongoose.Schema({
  pool: {
    type: Schema.Types.ObjectId,
    ref: 'Pool'
  },
  guest: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  startDate: Date,
  endDate: Date,
  price: String,
});

const Rental = mongoose.model('Rental', RentalSchema);
module.exports = Rental;
