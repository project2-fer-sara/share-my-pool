const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RentalSchema = mongoose.Schema({
  pool: {
    type: Schema.Types.ObjectId,
    ref: 'Pool'
  },
  usr: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  startDate: Date,
  guests: Number,
});

const Rental = mongoose.model('Rental', RentalSchema);
module.exports = Rental;
