const User = require('../Modal/model');
const Parcel = require('../Modal/Parcel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const signToken = id => {
  return jwt.sign({ id }, 'secret', {
    expiresIn: '39000'
  })
}




exports.signup = (async (req, res, next) => {
  
  console.log(req.body);
  // res.send('hello');
  
  // let user = await User.findOne({ email: req.body.email })
  // if (user) {
  //   res.send('already exist')
  // }

  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: parseInt(req.body.phone),
    address: req.body.address,

  });

  // res.send('success');

  const token = jwt.sign({ id: newUser._id }, 'secret', {
    expiresIn: '360000'
  })
  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser
    }
  });
});



exports.login = async (req, res, next) => {
  const { email, password } = req.query;
  ///----------check if email and password exist

  if (!email || !password) {
    res.send('incorrect Email');
  }
  ///-----------check if user exists and user password is correct
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(404).json({
      status: 'failed',
      message: 'invalid email or pass'
    })
  }
  const token = signToken(User._id);
  if (!user || !(await user.correctPassword(password, user.password))) {
    return console.log('Incorrect email or password');
  }


  //-------------check if the pasword is correct
  res.send({token: token, user: user});
};



// get parcels where status is in transit and phone number is the same as the user
exports.getParcels = async (req, res, next) => {
  const { phone } = req.query;
  const parcels = await Parcel.find({ status: 'in transit', phone: phone });
  res.send(parcels);
};


exports.getAllParcels = async (req, res, next) => {
  const { phone } = req.query;
  const parcels = await Parcel.find({ phone: phone });
  res.send(parcels);
};


// update the password of the user by getting the email and the new password updateOne
exports.forgotPassword = async (req, res, next) => {
  const { email, password } = req.query;
  const user = await User.findOne({ email: email })
  if (!user) {
    res.send('user does not exist');
  }
  // delete user and create a new user with the new password and data of the old user
  await User.deleteOne({ email: email }).then(() => {
    User.create({
      name: user.name,
      email: user.email,
      password: password,
      phone: user.phone,
      address: user.address,
    }).then(() => {
      res.send('password updated');
    })
  })
  // const newUser = await User.create({
  //   name: user.name,
  //   email: user.email,
  //   password: password,
  //   phone: parseInt(user.phone),
  //   address: user.address,
  // });
  // res.send('password updated');

  
};
