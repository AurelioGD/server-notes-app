const dto=require('./dto')
const bcrypt=require('bcrypt')

const login = async (req,res)=>{
    const { username, password } = req.body

    if(!username || !password) return res.json({error:"username or password missing or invalid"})

    const dataUser = await dto.getUserByUsername({username})    

    if(!dataUser.length>0) return res.json({error:"username or password missing invalid"})

    const passComprobation= await bcrypt.compare(password,dataUser[0].passwordHash)

    if(!passComprobation) return res.json({error:"username or password missing or invalid"})

    res.json({user:dataUser[0]})
}


const register= async (req,res)=>{
    const { username, password, name } = req.body

    if(!username || !password || !name) return res.json({error:"username or password or name missing"})

    const userCreated = await dto.createOneUser(name,username,password)
    
    res.json(userCreated)
}



module.exports={
    login,
    register
}