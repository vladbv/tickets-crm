import React, {useState} from 'react'

import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import {Container, Row, Col, Button, Form} from 'react-bootstrap'

export const ResetPassword  = ({handleOnChange, handleOnResetSubmit, formSwitcher, handleOnSubmit, email}) => {



return(
	<Container>
	<Row>
<Col className="p-5">
<h1 className="text-info text-center">Client login</h1>
	<h2>{new Date().toLocaleTimeString('bg') }</h2>	
	<hr />

	<Form autoComplete="off" onSubmit={handleOnResetSubmit}>
<Form.Group>
<Form.Label>Email Adress</Form.Label> 
	<Form.Control type="email" name="email" value={email} required  onChange={handleOnChange} placeholder="Enter your e-mail" />

	</Form.Group>
<Button type="submit">Reset Password</Button>
<hr />
	</Form>
	</Col>
	</Row>
<Row>
<Col>
<a href="#" onClick={() => formSwitcher('login')}>Login now</a>

	</Col>
	</Row>

	</Container>
)
}

ResetPassword.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	formSwitcher: PropTypes.func.isRequired,
	handleOnResetSubmit: PropTypes.func.isRequired,
email: PropTypes.string.isRequired,

}
