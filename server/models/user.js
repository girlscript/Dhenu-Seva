const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  posts: [
    {
       type: Schema.Types.ObjectId,
       ref: 'Post'
  }
 ]
});

module.exports = mongoose.model('User', userSchema);