require('dotenv').config()
const app=require('../app.js')

PORT=process.env.PORT||5500;

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})