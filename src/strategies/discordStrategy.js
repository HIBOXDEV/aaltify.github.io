const {DISCORD_CLIENT_ID , DISCORD_CLIENT_SECRET} = require("../config");
const User = require("../models/User")
const passport = require("passport")
const {Strategy} =  require("passport-discord")


passport.serializeUser((user , done ) =>{
    done(null , user.id);
});


passport.deserializeUser(async (id , done) =>{

  const user = await User.findById(id);
  done(null ,user);
})

passport.use(new Strategy({
  clientID: DISCORD_CLIENT_ID,
  clientSecret: DISCORD_CLIENT_SECRET,
  callbackURL: "https://altify.shop/auth/redirect",
  scope: ["identify" , "email"],
}, async (accessToken, refreshToken, profile, done) => { // Agregamos async aquí

  try {
    
     const user = await User.findOne({discordId: profile.id})

     if (user) return done(null ,user)
    const newUser = new User({
      discordId: profile.id,
      username: profile.username,
      avatar: profile.avatar,
      email: profile.email,
    });

    await newUser.save();

    done(null, newUser);
  } catch (error) {
    console.error(error);

    return done(error, null);
  }
}));
