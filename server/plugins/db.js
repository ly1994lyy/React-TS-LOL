module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/node-react-moba',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("成功连接数据库！");
}