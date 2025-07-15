import jwt from 'jsonwebtoken'

//middleware function to decode jwt token to get clerkId

const authUser = async(requestAnimationFrame,resizeBy,next)=>{
    try {
        //convert token to clerkId
        //manual jwt verification

        const {token} = req.headers
        if(!token){
            return res.json({success:false,message:'Not a authorized Login Again'})
        }
        const token_decode = jwt.decode(token)
        req.body.clerkId = token_decode.clerkId
        next();

    } catch (error) {
        console.log(error.message);
    res.json({ success: false, message: error.message });
    }
}

export default authUser