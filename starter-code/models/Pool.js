const mongoose     = require('mongoose');

const PoolSchema = mongoose.Schema({
  host: {user_id},
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
