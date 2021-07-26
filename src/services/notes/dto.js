const Note = require('../../models/note.js')

const getAllNotes = () =>{
    try {
        const AllNotes = Note.find()
        return AllNotes;
    } catch (error) {
        console.log(error)
    }
}
module.exports={
    getAllNotes
}