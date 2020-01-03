import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import UserImages from './UserImage';

function Userprofile() {
    const [userProfile, setUserProfile] = useState([])

    const { id } = useParams();
    
    const imageStyle = {
        height: '200px',
        width:'200px',
        borderRadius:'50%',
    }
    const divStyle = {
        display:'flex',
        alignItem:'center',
        justifyContent:'center',
        paddingTop:'10px'
        
    }

    useEffect(() => {
        // performing a GET request
        axios.get(`https://insta.nextacademy.com/api/v1/users/${id}`)
            .then(result => {
                // If successful, we do stuffs with 'result'
                setUserProfile(result.data)
                // setIsLoading(false)
                console.log(result.data)
            })
            .catch(error => {
                // If unsuccessful, we notify users what went wrong
                console.log('ERROR: ', error)
            })
    }, [])

    return (
        <div>
            <div style={divStyle}>
                {/* <h1>hello, {id}</h1> */}
                <img src={userProfile.profileImage} style={imageStyle} />
                <h2>{userProfile.username}</h2>
            </div>
            <div>
                <UserImages userId={id}/>
            </div>
        </div>
    )
}
export default Userprofile