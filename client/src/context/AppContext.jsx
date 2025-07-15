import { AppContext } from "./AppContextContext.jsx";
import { useAuth, useClerk } from "@clerk/clerk-react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";



const AppContextProvider = (props) => {
    const [credit, setcredit] = useState(false)
    const [image, setimage] = useState(false)
    const [resultImage, setresultImage] = useState(false)
    const { user } = useUser();

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate()

    const {getToken} = useAuth();

    const{isSignedIn} = useUser()
    const {openSignIn} = useClerk()

    const loadCreditsData = async ()=>{
        try {
            
            const token = await getToken();

            //call the api
            const {data} = await axios.get(backendUrl+'/api/user/credits',{headers:{token}})
            if(data.success){
                setcredit(data.credits)
                console.log(data.credits)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    }

    const removeBg = async(image)=>{
        try {
            if(!isSignedIn){
                return openSignIn();
            }

            setimage(image)
            setresultImage(false)

            navigate('/result')

            // console.log(image);
            const token = await getToken()
            const formData = new FormData();
            image && formData.append('image',image);
            // Add clerkId to formData
            if (window.Clerk && window.Clerk.user) {
                formData.append('clerkId', window.Clerk.user.id);
            } else if (typeof user !== 'undefined' && user && user.id) {
                formData.append('clerkId', user.id);
            }

            const {data} =await axios.post(backendUrl+'/api/image/remove-bg',formData,{headers:{token}})

            if(data.success){
                setresultImage(data.resultImage)
                data.creditBalance && setcredit(data.creditBalance)
            }
            else{
                toast.error(data.message)
                data.creditBalance && setcredit(data.creditBalance)
                if(data.creditBalance === 0){
                    navigate('/buy')
                }
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    }


  const value = {
    credit,setcredit,
    loadCreditsData,
    backendUrl,
    image,setimage,removeBg,
    resultImage,setresultImage
  };

  return (
    <AppContext.Provider value={value}> 
        {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
// AppContext is now exported from AppContextContext.jsx
