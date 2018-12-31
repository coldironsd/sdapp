var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdapp');


var Schema = new mongoose.Schema({

    userid: String,
    type: String,
    session: String,
    title: String,
    pay: Boolean,
    confirm: Boolean,
    tobuy: Boolean,
    todeliver: Boolean,
    phone: String,
    cost: String,
    description: String,
    address: String,
    fromwhere: String,
    towhere: String,
    time: String,
    tag: String,
    category: String,
    defaultPhoto: String,
    lat: String,
    lng: String,
    date: {
        type: Date,
        default: Date.now
    },
    photos: [{
        type: String
    }]
});
module.exports = mongoose.model('Task', Schema);