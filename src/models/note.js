
const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const noteSchema = new Schema({
    title:String,
    description:String,
    userId: Schema.Types.ObjectId
})

const Note = mongoose.model('Note', noteSchema);

module.exports=Note;

