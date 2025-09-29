import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,

    },
    cartData:{
        type:Object,
        default:{}
    }
},{timestamps:true,minimize:false})

const User=mongoose.model("User",userSchema)

export default User



// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     cartData: {
//         type: Object,
//         default: {}
//     }
// }, {
//     timestamps: true,
//     minimize: false  // Essential for saving empty objects
// });

// const User = mongoose.model('User', userSchema);
// export default User;