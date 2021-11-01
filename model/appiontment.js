const mongoose = require('mongoose');

const Appiontment = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    advisorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Advisor',
        required: true,
    },

    time: {
        type: Date,
        required: true,
    }

}, { timestamps: true });

module.exports = mongoose.model('Appiontment', Appiontment);