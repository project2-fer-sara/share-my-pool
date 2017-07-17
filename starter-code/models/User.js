const mongoose     = require('mongoose');

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role:{
    type: String,
    enum:['HOST','GUEST'],
    default: 'GUEST',
  },
  facebookID: String,
  avatar: String,
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
