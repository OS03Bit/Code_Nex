const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName:{
            type: String,
            // required: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String, // cloudinary
            // required: true,
        },
        coverImage:{
            type: String
        },
        password:{
            type: String,
            required: [true, "Password is required"],
        },
        refreshToken:{
            type: String,
        }
    },
    {
        timestamps: true
    }
);
const User = mongoose.model('User', userSchema);

module.exports = User;


