const Note = require('../../models/Note.js')

const getAllNotes = (userId) =>{
    try {
        const AllNotes = Note.find({userId})
        return AllNotes;
    } catch (error) {
        console.log(error)
    }
}
const getFavoriteNotes = (userId)=>{
    try {
        const FavoriteNotes = Note.find({userId,favorite:true})
        return FavoriteNotes;
    } catch (error) {
        console.log(error)
    }
}
const createNewNote=(contentNote)=>{
    const newNote = new Note(contentNote)
    const noteCreated = newNote.save();
    return noteCreated;
}
module.exports={
    getAllNotes,
    getFavoriteNotes,
    createNewNote
}