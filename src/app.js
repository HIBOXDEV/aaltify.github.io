const express = require("express");
const ejs = require("ejs");
const app = express()
const path = require("path");
const session =  require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const {MONGODB_URI}= require("./config");

require("./strategies/discordStrategy");
// Setting
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

app.use(express.static(path.join(__dirname , "public")));


//Midllewares
app.use(session({
    secret: "MAX IS THE BEST",
    name: "SESSION COOKIES / DONT SHARE THIS",
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
    mongoUrl: MONGODB_URI,
    }),
    cookie: {
        maxAge: 60000 * 60 * 30000
    },
    
    
}))
app.use(passport.initialize())
app.use(passport.session())

// GLOBAL VARIABLES
app.use((req , res ,next)=>{
    app.locals.user = req.user;
    next()
})

// ALL ROUTES
app.use("/" , require("./routes/index.routes"));
app.use("/auth" , require("./routes/auth.routes"));
app.use("/succes" , require("./routes/succes.routes"));
 
// functio
  
 module.exports = app
