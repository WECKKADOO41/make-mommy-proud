import React, {useState,useEffect} from "react"
import axios from 'axios'

    

function UserImages(props){
    const [userImages,setUserImages] = useState([])
    
    
        

    useEffect(() => {
        // performing a GET request
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${props.userId}`)
          .then(result => {
            // If successful, we do stuffs with 'result'
            setUserImages(result.data)
            // setIsLoading(false)
          })
          .catch(error => {
            // If unsuccessful, we notify users what went wrong
            console.log('ERROR: ', error)
          })
    }, [])

   
    console.log(userImages)
    return (

        <>
            {userImages.map(image =>(

                <img  width="100px" src={image}  alt="Card image cap" />
            ))
                
            }
        </>
    )
    
}

export default UserImages


