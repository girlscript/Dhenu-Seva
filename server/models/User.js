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
  reg_no: {
    type: Number,
    required: true
  },
  phone_no: {
    type: Number,
    required: true,
    unique: true,
  },
  gender : {
    type: String,
    enum: ["male", "female" , "other"],
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  specialist: {
    type: String,
    required: true
  },
  fees: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('User', userSchema);