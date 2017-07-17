const mongoose     = require('mongoose');
const Schema = mongoose.Schema;

const PoolSchema = mongoose.Schema({
  host: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  address: String,
  numberOfGuests: Number,
  poolPic: String,
  rules: {
    children: Boolean,
    petFriendly: Boolean,
    smoke: Boolean,
  },
  poolAdName: String,
  poolReview: {
    type: Schema.Types.ObjectId,
    ref: 'Review'
  },
  location: {type: {type:String}, coordinates:[Number]},
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}
});

PoolSchema.index({location: '2dsphere'});
const Pool = mongoose.model('Pool', PoolSchema);
module.exports = Pool;
