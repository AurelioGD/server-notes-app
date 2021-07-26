const dto = require('./dto');

const getnotes= async(req,res)=>{
    const AllNotes= await dto.getAllNotes()
    res.json({AllNotes})
}
module.exports={
    getnotes
}