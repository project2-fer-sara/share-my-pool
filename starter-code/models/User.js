const mongoose     = require('mongoose');

const UserSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  avatar: String,
  role:{
    type: String,
    enum:['HOST','GUEST'],
    default: 'GUEST',
  },
  facebookID: String,
  googleID: String
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at" },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
