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
module.exports={
    getAllNotes,
    getFavoriteNotes
}