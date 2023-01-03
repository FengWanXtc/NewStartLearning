let express=require("express");
let router=express.Router();
router.get("/data",(req,res)=>{
    res.send({msg:"three 路由地址"})
});

module.exports=router;