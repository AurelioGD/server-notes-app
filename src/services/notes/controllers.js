const dto = require('./dto');

const getAllNotes= async(req,res)=>{
    const AllNotes= await dto.getAllNotes()
    res.json({AllNotes})
}
module.exports={
    getAllNotes
}