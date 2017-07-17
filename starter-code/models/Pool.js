const mongoose     = require('mongoose');

const PoolSchema = mongoose.Schema({
<<<<<<< HEAD
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
=======
  poolAdName: String,
  poolPic: [String],
  owner: User,
  poolReview: Review,
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
>>>>>>> d7cb6431ff43381fb5325f3ad14dcc40effac886
});

const Pool = mongoose.model('Pool', PoolSchema);
module.exports = Pool;
