const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const configAuth = require('../config.json').auth;

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  
  User.findOne({ 
    email: email
   })
  .then(savedUser => {
    if (savedUser) {
      const error = new Error('User already exists. Please enter a new email');
      throw error;
    }
    return  bcrypt.hash(password , configAuth.passwordEncryptionKeyLength)
  })
    .then(hashedPassword => {
       const user = new User ({
        email: email,
        password: hashedPassword,
        name: name,
       });
       return user.save();
     })
    .then(
      result => {
        res.status(201).json({ 
          message: 'User created!',
          userId: result._id
        });
      },
    )
    .catch((err) => {
      console.log(err)
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  let enteredUser;

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        const error = new Error('Enter valid credentials.');
        throw error;
      }
      enteredUser = user;

      return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {
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
    })
    .catch(err => {
      console.log(err)
    });
};
