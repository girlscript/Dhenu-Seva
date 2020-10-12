const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const configAuth = require('../config.json').auth;

exports.signup = async (req, res, next) => {
  const {email,name,password} = req.body
  try {
    let savedUser = await User.findOne({ email })
    if (savedUser) {
      const error = new Error('User already exists. Please enter a new email');
      throw error;
    }
    let hashedPassword = await bcrypt.hash(password, configAuth.passwordEncryptionKeyLength)
    const user = new User({
      email,
      password: hashedPassword,
      name,
    });
    let result = await user.save();

    res.status(201).json({
      message: 'User created!',
      userId: result._id
    })
  }
  catch (error) {
    console.log(error)
  }
}

exports.login = async (req, res, next) => {
  const {email,password} = req.body
  let enteredUser;
  try {
    let user = await User.findOne({ email })
    if (!user) {
      const error = new Error('Enter valid credentials.');
      throw error;
    }
    enteredUser = user;

    let isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      const error = new Error('Wrong password!');
      throw error;
    }
    const token = jwt.sign(
      {
        email: enteredUser.email,
        userId: enteredUser._id.toString()
      },
      // the secret key
      configAuth.secretKey,
      { expiresIn: '1h' }
    );
    res.status(200).json({
      token: token,
      userId: enteredUser._id.toString()
    });
  }

  catch (error) {
    console.log(error)
  }
}