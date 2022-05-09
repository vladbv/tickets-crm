import React from 'react'

import {Form, Jumbotron, Button, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'

import "./add-ticket-form.style.css";
import {shortCode} from '../../utils/validation'
export const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDt, frmDataError}) => {
console.log(frmDt);

return  <Form autoComplete="off" className="mt-3 p-3 add-new-ticket bg-light" onSubmit={handleOnSubmit}>
        <h1 className="text-info text-center" >Add New Ticket</h1>
        <hr />
<Form.Group>
<Form.Label>Subject</Form.Label> 
	<Form.Control name="subject" required value={frmDt.subject}  onChange={handleOnChange} placeholder="Enter your e-mail" />

	</Form.Group>
        <Form.Text className="text-danger">{frmDataError.subject && "Please, enter the subject" }</Form.Text>
<Form.Group as={Row}>
<Form.Label column sm={3}>Issue Found</Form.Label>  
		<Col sm={9}>
	<Form.Control type="date" value={frmDt.issueDate}  name="issueDate" required onChange={handleOnChange} />
		</Col>
	</Form.Group>
<Form.Group>
<Form.Label>Password</Form.Label>  
	<Form.Control as="textarea" value={frmDt.detail}  name="detail" rows="5" required onChange={handleOnChange} />

	</Form.Group>	

<Button type="submit" block>Submit</Button>
<hr />
	</Form>
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
handleOnChange: PropTypes.func.isRequired, 
    frmDt: PropTypes.object.isRequired,
    frmDataError: PropTypes.object.isRequired,
}

