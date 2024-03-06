const User = require("../models/user");

function generateRandom4DigitNumber() {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber;
}
module.exports.home = function (req, res) {
    return res.redirect("/user/login");
};
