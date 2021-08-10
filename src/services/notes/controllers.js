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
module.exports={
    getAllNotes,
    getFavoriteNotes,
    createNewNote
}