const jwt=require('jsonwebtoken')
const Note=require('../models/Note')

module.exports= async(req,res,next)=>{
    const authorization = req.get('authorization')
    let token = null;
    let verifyToken=null;
    let userId=null;
    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        token = authorization.split(' ')[1] 
    }else{
        return res.json({error:true,message:"Invalid token"})
    } 
    try {
        verifyToken= jwt.verify(token,process.env.SECRET)
    } catch (error) {
        return res.json({error:true,message:"Invalid token"})
    }
    if(verifyToken.id){
        userId = verifyToken.id
    }  else{
        return res.json({error:true,message:"Invalid token"})
    } 
    req.userId=userId;
    next()
}