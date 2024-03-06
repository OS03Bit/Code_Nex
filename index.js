const express = require("express");
const dotenv = require('dotenv');
const app = express();
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const db = require("./config/mongoose");
const bodyParser = require("body-parser");


dotenv.config()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.urlencoded());
// console.log(__dirname + '\\public\\assets\\')
// app.use(express.static(__dirname + '/public/assets/'));  //production using public
// app.use(express.static(__dirname + './assets'));   //production using assets
app.use(express.static("./assets")); //depolyment using assets

app.use("/upload", express.static(__dirname + "/upload"));
app.use("/data", express.static(__dirname + "/data"));

app.use(expressLayouts);

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(
  session({
    name: "newUSer",
    secret: "arfsdfasdf",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 100000 * 60,
    },
    store: MongoStore.create({
      mongooseConnection: db,
      autoRemove: "disabled",
      mongoUrl: "mongodb://localhost/newECM", 
    }),
    function(error) {
      console.log(error || "connect-mongodb setup okay");
    },
  })
);


app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use("/", require("./routes"));


app.listen(process.env.PORT, function (err) {
  if (err) {
    console.log(`Error in running thr server: ${err}`);
  }
  console.log(`Server is running on port: ${process.env.PORT}`);
});
