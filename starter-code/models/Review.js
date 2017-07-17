const mongoose     = require('mongoose');
const User = require('./User');
const Pool = require('./Pool');
const ReviewSchema = mongoose.Schema({

  guest: User,
  title: String,
  description: String,
  starsis:Number,
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },

  guest: User,
  title: String,
  description: String,
  starsis: Number,
  pool: Pool
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }

});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
