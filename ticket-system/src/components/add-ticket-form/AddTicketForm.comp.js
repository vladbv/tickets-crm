import React from 'react'

import {Form, Jumbotron, Button, Row, Col} from 'react-bootstrap'


export const AddTicketForm = ({handleOnSubmit, handleOnChange}) => {

return <Form autoComplete="off" onSubmit={handleOnSubmit, handleOnChange}>
<Form.Group>
<Form.Label>Subject</Form.Label> 
	<Form.Control type="email" name="email" required  onChange={handleOnChange} placeholder="Enter your e-mail" />

	</Form.Group>
<Form.Group as={Row}>
<Form.Label column sm={3}>Issue Found</Form.Label>  
		<Col sm={9}>
	<Form.Control type="date"  name="issueDate" required onChange={handleOnChange} />
		</Col>
	</Form.Group>
<Form.Group>
<Form.Label>Date</Form.Label>  
	<Form.Control as="textarea"  name="details" rows="5" required onChange={handleOnChange} />

	</Form.Group>	

<Button type="submit" block>Submit</Button>
<hr />
	</Form>
	
}
