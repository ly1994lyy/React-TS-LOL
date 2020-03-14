const express = require('express')
const app = express()


app.use(require('cors')())
app.get('/',(req,res)=>{
    res.send({
        username:'admin',
        password:'123'
    })
})

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})