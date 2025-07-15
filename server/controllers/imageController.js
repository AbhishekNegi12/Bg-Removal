import axios from "axios";
import fs from "fs";
import userModel from "../models/userModel.js";
import FormData from "form-data";


//controller function to remove the bg from image

const removeBgImage = async (req, res) => {
  try {
    //get image from frontend to backend
    //form data is used for that
    //to parse the image multer is used as a middleware

    const clerkId = req.clerkId || req.body.clerkId;
    const user = await userModel.findOne({ clerkId });

    if(!user){
        return res.json({success:false,message:'User Not Found'})
    }
    if(user.creditBalance<=0){
        return res.json({success:false,message:'No credit Balance',creditBalance:user.creditBalance})
    }

    const imagePath = req.file.path;

    //Reading the image file
    const imageFile = fs.createReadStream(imagePath);

    const formData = new FormData()
    formData.append('image_file',imageFile)

    //calling api to remove image
    const {data} = await axios.post('https://clipdrop-api.co/remove-background/v1',formData,{
        headers:{
            'x-api-key': process.env.CLIPDROP_API,
        },
        responseType:'arraybuffer'
    })

    //send response to frontend
    //base 64 image
    const base64Image = Buffer.from(data,'binary').toString('base64')

    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`

    //deducting credit
    await userModel.findByIdAndUpdate(user._id,{creditBalance:user.creditBalance-1})

    //sending image to user
    res.json({success:true, resultImage, creditBalance:user.creditBalance-1, message:'background Removed'})

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
export default removeBgImage;
