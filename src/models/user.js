const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const userSchema = new Schema({
    name:String,
    username:String,
    passwordHash:String,
    notes:[{
        type:Schema.Types.ObjectId,
        ref:'Note'
    }]
})

const User = mongoose.model('User', userSchema);

module.exports=User;