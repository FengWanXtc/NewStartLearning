let express=require("express");
let router=express.Router();
router.get("/data",(req,res)=>{
    res.send({msg:"one 路由地址"})
});

module.exports=router;