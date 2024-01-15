const {Router} = require("express");
const router = Router();
 const {isAuthorized } = require("../utils/auth") 

router.get("/" , isAuthorized ,(req , res) =>{

     
    res.render("succes");
 });


 router.get("/services" , isAuthorized ,  (req ,res) =>{
    res.render("services");
});






 module.exports  = router;