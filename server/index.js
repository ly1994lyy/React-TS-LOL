const express = require('express')
const app = express()


app.use(require('cors')())
app.use(express.json())

app.set('secret','asdaklskfdlsdf')

app.use('/uploads',express.static(__dirname+'/uploads'))

require('./routes/admin')(app)
require('./plugins/db')(app)


app.listen(4000,()=>{
    console.log("http://localhost:4000");
})