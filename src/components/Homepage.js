import React,{useState} from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';
import { findByLabelText } from '@testing-library/react';
import { Button } from 'reactstrap';
import {Link} from "react-router-dom";
import UserImages from "./UserImage";
import Carousel from "./carousel"


function Homepage(props) {
    // const [users, setUsers] = useState([]);
    const cardStyle = {
        width:'50%',
        height:'100%',
        margin:'20px'
      }
      const cardTitleStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        marginTop:'5px',
        marginLeft: '5px',
        marginRgiht:'20px'
      }
     
    return (
        <div>
            
        <div>
            { console.log(props.usersFromApp) }
            <ul style={{listStyle: 'none' }}>
        {props.usersFromApp.map(user => (
          <li>
            <Card style={cardStyle} >
        <CardTitle tag={Link} to={`/users/${user.id}`}> <img src={user.profileImage} style={cardTitleStyle}/> <p style={{ display: 'inline', paddingLeft: '10px' }}>{user.username}</p></CardTitle>
            {/* <CardImg  width="100px"  alt="Card image cap" /> */}
            <Carousel userId={user.id}/>
            {/* <UserImages userId={user.id}   /> */}
            <CardBody>
              <CardTitle>{user.id}</CardTitle>
              <CardSubtitle>Caption</CardSubtitle>
              <CardText>description.</CardText>
              <Button>Follow</Button>
            </CardBody>
          </Card>
            {/* {user.id}: {user.username} */}
            {/* {/* <img src={user.profileImage} width="100px" style={imageStyle} />
            <button color="green">follow</button> */}
          </li> 
        ))}
      </ul>
        </div>
        </div>
    )
}

export default Homepage