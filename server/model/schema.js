const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required:true,
        minlength: 7
    },
    username: {
        type: String,
    }
});

module.exports = User = mongoose.model('user',userDataSchema);
