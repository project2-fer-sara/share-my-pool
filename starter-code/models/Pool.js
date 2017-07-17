const mongoose     = require('mongoose');

const PoolSchema = mongoose.Schema({
  poolAdName: String,
  poolPic: [String],
  owner: User,
  poolReview: Review,
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

const Pool = mongoose.model('Pool', PoolSchema);
module.exports = Pool;
