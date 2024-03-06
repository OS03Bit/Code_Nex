const User = require("../models/user");
const util = require("util");

module.exports.Login = function (req, res) {
    return res.render("signup", {
        title: "Login",
    });
};
module.exports.createSession = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body)
        // Find the user in the database based on the provided username
        let user = await User.findOne({ email: email });
        if (user) {
            return res.redirect("/user/dashboard");
        }
        else {
            return res.redirect("/user/login");
        }
    } catch (error) { }
};
module.exports.destroySession = async function (req, res) {

    const logoutPromise = util.promisify(req.logout);
    await logoutPromise.call(req);

    return res.redirect("/");
};
module.exports.dashboard = function (req, res) {
    return res.render("dashboard", {
        title: "Dashboard",
    });
};
module.exports.signup = function (req, res) {
    return res.render("Signup", {
        title: "Signup",
    });
};
module.exports.create = async function (req, res) {
    try {
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        let user = await User.create(req.body);
        return res.redirect("/user/login");
      } else {
        return res.redirect("back");
      }
    } catch (err) {
      console.log("error in creating user in signing up: ",err);
      return;
    }
  };
  