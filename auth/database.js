const mongoose = require('mongoose');

exports.connectMongoose = () =>{
    mongoose
    .connect('mongodb://localhoast:27017/anal_mol')
    .then((e)=> console.log(`Connected to MongoDB:${e.connection.host}`))
    .catch((e)=>  console.log(e));
};

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique: true
    },
    password:String,
});

exports.user = mongoose.model("User", userSchema);