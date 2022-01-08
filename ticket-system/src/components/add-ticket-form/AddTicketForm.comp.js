import React from 'react'

import {Form, Jumbotron, Button} from 'react-bootstrap'


export const AddTicketForm = ({handleOnSubmit,}) => {

return <Form autoComplete="off" onSubmit={handleOnSubmit}>
<Form.Group>
<Form.Label>Subject</Form.Label> 
	<Form.Control type="email" name="email" required  onChange={handleOnChange} placeholder="Enter your e-mail" />

	</Form.Group>
<Form.Group>
<Form.Label>Password</Form.Label> 
	<Form.Control type="password" name="password" value={pass} required onChange={handleOnChange} placeholder="Enter your password"  />

	</Form.Group>	

<Button type="submit">Login</Button>
<hr />
	</Form>
	
}
