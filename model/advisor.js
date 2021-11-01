const mongoose = require('mongoose');

const advisorSchema = mongoose.Schema({
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    photo_url: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("Advisor", advisorSchema);

