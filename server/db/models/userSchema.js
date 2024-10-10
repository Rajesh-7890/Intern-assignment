const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    confirmPassword: {
      type: String,
    },
    mobilenumber: {
      type: String,
    },

    address: {
      type: String,
    },

    gender: {
      type: String,
    },
    DOB: {
      type: Date,
    },

    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
