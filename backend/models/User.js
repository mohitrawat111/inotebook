const moongose = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});
module.exports = moongose.model('user', UserSchema);