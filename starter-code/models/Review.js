const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = mongoose.Schema({
  guest: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  description: String,
  starsis: Number,
  pool: {
    type: Schema.Types.ObjectId,
    ref: 'Pool'
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }

});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
