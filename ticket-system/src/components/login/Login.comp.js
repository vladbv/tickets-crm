import React, {useState} from 'react'

import ReactDOM from 'react-dom'

import {useDispatch} from 'react-redux'

import PropTypes from 'prop-types'

import {Container, Row, Col, Button, Form} from 'react-bootstrap'

import { loginPending, loginSuccess, loginFail } from './loginSlice'

export const LoginForm  = ({formSwitcher, }) => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	const handleOnChange = e => {
const {name, value} = e.target;
		console.log(name, value);
		switch(name){
			case 'email':
				setEmail(value);
	break;
			case 'password': 
				setPassword(value);
			default:
			break;
	}
	}

	const handleOnSubmit = (e) => {
		e.preventDefault();
		
				if(!email || !password){
		alert("Fill up the form");
				}
		
				// Submitting the form
				console.log(email, password);
			}

return (

	
	<Container>
	<Row>
<Col className="p-5">
<h1 className="text-info text-center">Client login</h1>
	<h2>{new Date().toLocaleTimeString('bg') }</h2>	
	<hr />

	<Form autoComplete="off" onSubmit={handleOnSubmit}>
<Form.Group>
<Form.Label>Email Adress</Form.Label> 
	<Form.Control type="email" name="email" value={email} required  onChange={handleOnChange} placeholder="Enter your e-mail" />

	</Form.Group>
<Form.Group>
<Form.Label>Password</Form.Label> 
	<Form.Control type="password" name="password" value={password} required onChange={handleOnChange} placeholder="Enter your password"  />

	</Form.Group>	

<Button type="submit">Login</Button>
<hr />
	</Form>
	</Col>
	</Row>
<Row>
<Col>
<a href="#" onClick={() => formSwitcher('reset')}>Forgotten Password?</a>

	</Col>
	</Row>

	</Container>
)
}

LoginForm.propTypes = {

	formSwitcher: PropTypes.func.isRequired,

}
