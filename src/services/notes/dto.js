const Note = require('../../models/Note.js')

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