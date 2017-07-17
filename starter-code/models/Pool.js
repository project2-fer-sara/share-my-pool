const mongoose     = require('mongoose');
const User = require('./User');
const Review = require('./Review');
const PoolSchema = mongoose.Schema({
  host: User,
  address: String,
  numberOfGuests: Number,
  poolPic: String,
},{
  rules: {
    children: Boolean,
    petFriendly: Boolean,
    smoke: Boolean,
  }
},{
  poolReview: Review
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  poolAdName: String,
  poolPic: [String],
  owner: User,
  poolReview: Review,
  location: {type: {type:String}, coordinates:[Number]}
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }

});

PoolSchema.index({location: '2dsphere'});
const Pool = mongoose.model('Pool', PoolSchema);
module.exports = Pool;
