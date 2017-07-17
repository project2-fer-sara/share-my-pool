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
<<<<<<< HEAD
  googleID: String
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at" },
=======
  googleID: String,
  avatar: String,
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
>>>>>>> d7cb6431ff43381fb5325f3ad14dcc40effac886
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
