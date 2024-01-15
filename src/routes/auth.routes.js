// Variables
const {Router} = require("express");
const router = Router();
 const  passport = require("passport");
const { isNotAuthorized, isAuthorized } = require("../utils/auth");
//Route for Auth
router.get("/" , isNotAuthorized ,  passport.authenticate("discord"));


router.get("/redirect" , passport.authenticate("discord" ,{
    successRedirect: "/succes",
    failureRedirect: "/",
}));

router.get("/logout", isAuthorized , (req, res) => {
    req.logout(req.user, err => {
      if(err) return next(err);
      res.redirect("/");
    });
  });
  

 module.exports = router;