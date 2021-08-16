const dto = require('./dto');

const getAllNotes= async(req,res)=>{
    const { userId } = req;
    const AllNotes= await dto.getAllNotes(userId)
    res.json({AllNotes})
}
const getFavoriteNotes = async(req,res)=>{
    const { userId } = req;
    const FavoriteNotes= await dto.getFavoriteNotes(userId)
    res.json({FavoriteNotes})
} 

const createNewNote = async(req,res)=>{
    const { title, description, favorite=false, userId } = req.body;

    if(!title || !description || !userId) { return res.json({error:true,message:"an error ocurred"}) }

    const newNote = await dto.createNewNote({title,description,favorite,userId})
    
    res.json({newNote,error:false})
}
const toggleFavorite =  async(req,res)=>{
    const { noteId }=req.body

    if(!noteId) { return res.json({error:true,message:"an error ocurred"}) }

    const noteChanged= await dto.toggleFavorite(noteId)

    res.json({noteChanged,error:false})
}
const updateNote= async (req,res)=>{
    const { noteId ,title, description } = req.body;
    if(!title || !description || !noteId) { return res.json({error:true,message:"an error ocurred"}) }
    const noteUpdated= await dto.updateNote({noteId,title,description})
    res.json({noteUpdated,error:false})
} 

const deleteNote= async(req,res)=>{

    const { noteId } = req.body;

    if(!noteId) { return res.json({error:true,message:"an error ocurred"})}

    const noteRemoved= await dto.deleteNote(noteId)

    res.json({noteRemoved,error:false})


}

module.exports={
    getAllNotes,
    getFavoriteNotes,
    createNewNote,
    toggleFavorite,
    updateNote,
    deleteNote
}