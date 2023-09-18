const dbJury= require("../model/getDbData")

exports.getAllJuries = async (req,res)=>{
    try {
        const data = await dbJury("select * from jury")
        if(!data)
            res.json({success: true,message: "no data found"})
        res.json({success:true ,data});
    } catch (error) {
        console.log(error)
    }
} 

