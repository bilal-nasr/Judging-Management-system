module.exports = (req,res,next)=>{
    console.log(`Logged ${req.url} at ${Date.now()}`)
    next()
}