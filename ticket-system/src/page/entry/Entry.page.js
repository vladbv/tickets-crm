import React, {useState} from 'react'

import './entry.style.css';

import {ResetPassword} from '../../components/password-reset/PasswordReset.comp'

import {LoginForm} from  '../../components/login/Login.comp.js';

import {Card} from "react-bootstrap"

export const Entry = () => {
	
	const [frmLoad, setFrmLoad] = useState('login');


			const formSwitcher = frmType => {
				setFrmLoad(frmType)
					}

	const handleOnResetSubmit = (e) => {

e.preventDefault();
		

		// Submitting the form
		}



	return (
	
<div className="entry-page bg-info">

	<Card className="form-box">
<Card.Header>Login</Card.Header>

		{frmLoad === 'login' && <LoginForm formSwitcher={formSwitcher} /> }

		{frmLoad === 'reset' && <ResetPassword 
		formSwitcher={formSwitcher} 
		//handleOnChange={handleOnChange} 
		handleOnResetSubmit={handleOnResetSubmit}
		 //email={email} 
		 /> }


		</Card>


	</div>

)

}
