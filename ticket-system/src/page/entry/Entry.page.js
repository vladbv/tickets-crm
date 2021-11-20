import React, {useState} from 'react'

import './entry.style.css';

import {ResetPassword} from '../../components/password-reset/PasswordReset.comp'

import {LoginForm} from  '../../components/login/Login.comp.js';

import {Card} from "react-bootstrap"

export const Entry = () => {

const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [frmLoad, setFrmLoad] = useState('login');

	const formSwitcher = frmType => {
setFrmLoad(frmType)
	}
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
	const handleOnResetSubmit = (e) => {

e.preventDefault();
		if(!email ){
alert("Please enter your e-mail");
		}

		// Submitting the form
		console.log(email, password);
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
	
<div className="entry-page bg-info">

	<Card className="form-box">
<Card.Header>Login</Card.Header>

		{frmLoad === 'login' && <LoginForm formSwitcher={formSwitcher} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} email={email} pass={password} /> }

		{frmLoad === 'reset' && <ResetPassword formSwitcher={formSwitcher} handleOnChange={handleOnChange} handleOnResetSubmit={handleOnSubmit} email={email} /> }


		</Card>


	</div>

)

}
