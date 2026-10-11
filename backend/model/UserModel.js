const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchemas = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,

    },
    createdAt:
    {
        type:Date,
        default: new Date(),
    },
});

userSchemas.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model('User', userSchemas);

