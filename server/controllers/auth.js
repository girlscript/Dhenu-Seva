const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  const reg_no = req.body.reg_no;
  const phone_no = req.body.phone_no;
  const gender = req.body.gender;
  const qualification = req.body.qualification;
  const experience = req.body.experience;
  const specialist = req.body.specialist;
  const fees = req.body.fees;

  bcrypt
     .hash(password , 12)
     .then(hashedPassword => {
       const user = new User ({
        email: email,
        password: hashedPassword,
        name: name,
        reg_no: reg_no,
        phone_no: phone_no,
        gender: gender,
        qualification: qualification,
        experience: experience,
        specialist: specialist,
        fees: fees
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
    // adding token 
      res.status(200).json({
        userId: enteredUser._id.toString() 
      });
    })
    .catch(err => {
      console.log(err)
    });
};
