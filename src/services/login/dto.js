const bcrypt=require('bcrypt')
const User=require('../../models/user')

const getUserByUsername=(username)=>{
    try {
        const userData = User.find(username);
        return userData;
    } catch (error) {
        console.log(error)
    }
}

const createOneUser= async (name,username,password)=>{
    try {
        const passwordHash= await bcrypt.hash(password,10);
        const NewUser = new User({
            name,
            username,
            passwordHash
        })
        const dataUser= NewUser.save()
        return dataUser;
    } catch (error) {
        console.log(error)
    }
}
module.exports={
    getUserByUsername,
    createOneUser
}