const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
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
  timings: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  name_of_clinic: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  pin_code: {
    type: Number,
    required: true 
  },

  // the creator
  creator: {
    type: Schema.Types.ObjectId,
    ref:'User',
    required: true 
  }
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', postSchema);