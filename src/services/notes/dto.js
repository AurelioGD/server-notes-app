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
module.exports={
    getAllNotes,
    getFavoriteNotes
}