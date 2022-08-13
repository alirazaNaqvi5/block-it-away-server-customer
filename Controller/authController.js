const User = require('../Modal/model');
const jwt = require('jsonwebtoken');

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
    age: parseInt(req.body.age),
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
  const { email, password } = req.body;
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
  res.status(201).json({
    status: 'success',
    token,
    data: {
      user,
    }
  });
};