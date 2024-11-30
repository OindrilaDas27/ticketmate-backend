const mongoose = require('mongoose');
const { Schema } = mongoose;

const citySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('City', citySchema);