import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import './App.css';

import logo from './instagram.png'
import sign from './Cursiveinsta.png'
import Homepage from './components/Homepage'
import Userprofile from './components/Userprofile'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import axios from 'axios'
import LoadingIndicator from './loading';
import {Link, Route, Switch} from "react-router-dom";
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';


const imageStyle = {
  marginTop: "20px"
}
// const Example = (props) => {
//   return (
//     <div>
      
//     </div>
//   );
// };

const navbarLogo = {
  width:'40px',
  height:'30px',
  borderRight: '1px solid black',
  paddingRight: '10px'
}
const navbarSign = {

}
function App() {

  const [ isLoading, setIsLoading ] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [users, setUsers] = useState([]);

  const [text, setText] = useState('hello');
  
 
  

  useEffect(() => {
    // performing a GET request
    axios.get('https://insta.nextacademy.com/api/v1/users')
      .then(result => {
        // If successful, we do stuffs with 'result'
        setUsers(result.data)
        setIsLoading(false)
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log('ERROR: ', error)
      })
  }, [])

  if (isLoading) {
    return <LoadingIndicator />
  }


  
  return (
    <div>
      {/*<Route path='/profile'>
        <Profile />
      </Route>*/}
      
      <div>
        <Navbar color="light" light expand="md" style={ { listStyle: 'none' } }>
          <NavbarBrand ><img src={logo} style={navbarLogo}/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/Homepage"><img src={sign}/></NavLink>
              </NavItem>
              <NavItem>
                {/* <NavLink tag={Link} to="/profile">Profile</NavLink> */}
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {/* Options */}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink tag={Link} to="./LoginForm">Log in</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink tag={Link} to="/signup">Sign up</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
          <NavItem><input type="text" placeholder="Search.."/></NavItem>
        </Navbar>
      </div>

      <Route exact path='/Homepage'>
        <Homepage text={ text } usersFromApp={ users }/>
      </Route>
      <Route path='/users/:id'>
        <Userprofile/>
      </Route>
      <Route path='/signup'>
      <SignUpForm/>
      </Route>
      <Route path='/LoginForm'>
        <LoginForm/>
      </Route>


      

      {/* <h1>Home Page</h1> */}
     
    </div>

  );
}

export default App;
