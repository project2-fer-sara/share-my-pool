const mongoose     = require('mongoose');

const ReviewSchema = mongoose.Schema({

  guest: User,
  title: String,
  description: String,
  starsis:Number,
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },

  guest: {user_id},
  title: String,
  description: String,
  starsis: Number,
  pool: {pool_id}
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }

});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
