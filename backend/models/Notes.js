const moongose = require('mongoose');

const NotesSchema = new Schema({
    title: {
        type: string,
        required: true
    },
    description: {
        type: string,
        required: true,

    },
    tag: {
        type: string,
        dafault: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }

});
module.exports = moongose.model('notes', NotesSchema);