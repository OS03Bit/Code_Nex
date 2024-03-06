const mongoose = require('mongoose');
const express = require("express");

const uri = "mongodb+srv://omsinkar03bit:4lcT6gBp7WXLNUfU@cluster0.vd72cna.mongodb.net/DB1";
mongoose.set('strictQuery', false);

const start = async() => {
    // try{
        await mongoose.connect(uri);

    // }
    // catch (err) {
    //     router.use((err, req, res, next) => {
    //       if (errorConfig[err.code]) {
    //         res.redirect(errorConfig[err.code]);
    //       } else {
    //         // Default error handling
    //         return res.render("components/error404");;
    //       }
    //     });
    //     console.log("Mongoose: ",err); 
    // }

}
start()
