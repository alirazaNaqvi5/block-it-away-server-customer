const bcrypt = require('bcrypt');
const { model } = require("mongoose");
const mongoose = require('mongoose');

// crreate a schema for the user registration, and store password in encrypted form
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false
    },
    phone: {
        type: Number,
        required: [true, 'Please provide your age']
    },
    address: {
        type: String,
        required: [true, 'Please provide your address']
    },
    

});

// encrypt the password before saving the user
userSchema.pre('save', async function (next) { 
    // only run this function if password was actually modified
    if (!this.isModified('password')) return next();

    // hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    next();
}
);
// compare the password with the encrypted password
userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

const User = mongoose.model('User', userSchema);

module.exports = User;
