const mongoose     = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  name: String,
  lastName: String,
  username: String,
  password: String,
  email: String,
  avatar_path: String,
  avatar_name: String,
  role:{
    type: String,
    enum:['HOST','GUEST'],
    default: 'GUEST',
  },
  facebookID: String,
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
