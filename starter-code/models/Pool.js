const mongoose     = require('mongoose');

const PoolSchema = mongoose.Schema({
  poolAdName: String,
  poolPic: [String],
  owner: User,
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  poolReview: Review,
});

const Pool = mongoose.model('Pool', PoolSchema);
module.exports = Pool;
