var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdapp');

var schema = new mongoose.Schema({

    title: String,
    phone: String,
    description: String,
    address: String,
    time: String,
    tag: String,
    category: String,
    defaultPhoto: String,
    date: {
        type: Date,
        default: Date.now
    },
    photos: [{
        type: String
    }]
});
module.exports = mongoose.model('Task', schema);
