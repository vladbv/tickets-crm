import React, {useState} from 'react'

import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import {Container, Row, Col, Button, Form} from 'react-bootstrap'

export const LoginForm  = ({handleOnChange, formSwitcher, handleOnSubmit, email, pass}) => {



return(
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
	<Form.Control type="password" name="password" value={pass} required onChange={handleOnChange} placeholder="Enter your password"  />

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
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
	formSwitcher: PropTypes.func.isRequired,
email: PropTypes.string.isRequired,
	pass: PropTypes.string.isRequired,

}
