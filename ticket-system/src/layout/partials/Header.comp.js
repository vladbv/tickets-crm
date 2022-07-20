import React, {useState}  from 'react';

import {Navbar, Nav} from 'react-bootstrap';
 
import logo from '../../assets/img/logo-boyanovdent.png';

import { Link, useHistory } from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

export const Header = () => {
const history = useHistory();
const logMeOut = () => {
history.push("/");
};
const locale = 'en';
const [time, setTime] = useState(new Date())

React.useEffect(() => {

const timer = setInterval(() => {

setTime(new Date());
	}, 60 * 1000);

	return () => {
clearInterval(timer);
	}
}, []);

// TO PREVENT UNINITIALIZED VARIABLE, ALWAYS DECLARE VARIABLES IN THE CORRECT ORDER 
 
	const day = time.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${time.getDate()} ${time.toLocaleDateString(locale, { month: 'long' })}\n\n`;
	 const hour = time.getHours();
const greeting = `Good ${ (hour > 22 && 'evening') || (hour < 12 && 'morning') || (hour < 18 && 'day')  }, `;  



 const timep = time.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });


return <div>
		<Navbar className="p-3 mb-2" collapseOnSelect bg="info" variant="dark" expand="md">
<Navbar.Brand><img src={logo} width="90px" alt="" height="120px" /> </Navbar.Brand>
		{greeting}
		<Navbar.Toggle aria-controls="basic-navbar-nav" /> 
		<Navbar.Collapse id="basic-navbar-nav">
<Nav className="ml-auto text-right">
          
        
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> 
          <Nav.Link as={Link} to="/tickets">Tickets</Nav.Link> 


 	<Nav.Link onClick={logMeOut}>Logout</Nav.Link> 
			</Nav>
		</Navbar.Collapse>
		</Navbar>
	</div>
};

