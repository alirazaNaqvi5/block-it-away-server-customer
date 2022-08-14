const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// create schema for parcel registration
const ParcelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    receiver_phone: {
        type: Number,
        required: true
    },
    receiver_address: {
        type: String,
        required: true
    },
    receiver_city: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    },
    registered_by: {
        type: String,
        required: true
    },
    admin_status: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = Parcel = mongoose.model('Parcel', ParcelSchema);