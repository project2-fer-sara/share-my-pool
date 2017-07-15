const mongoose     = require('mongoose');

const ReviewSchema = mongoose.Schema({
  fromWho: User,
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  infoReview: String,
});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
