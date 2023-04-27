const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paintingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Painting', paintingSchema);