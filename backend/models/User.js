const moongose = require('mongoose');
const { Schema } = moongose;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // e11000-duplicate-key-error-index-in-mongodb-mongoose- so remove it to avoid this error and drop test db and again it will recreate when u hit the api from thunderbolt
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});
const User = moongose.model('user', UserSchema);
User.createIndexes();
module.exports = User