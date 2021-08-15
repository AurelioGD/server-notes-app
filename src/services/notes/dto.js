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
const toggleFavorite= async (noteId)=>{

    const noteToChange= await Note.find({_id:noteId})

    const {favorite}=noteToChange[0];

    const updateNote= Note.updateOne({_id:noteId},{favorite:!favorite})

    return updateNote;

}
const updateNote=(dataToReplace)=>{
    const {noteId,title,description}=dataToReplace;
    const noteUpdated=Note.updateOne({_id:noteId},{title,description})
    return noteUpdated
}
module.exports={
    getAllNotes,
    getFavoriteNotes,
    createNewNote,
    toggleFavorite,
    updateNote
}