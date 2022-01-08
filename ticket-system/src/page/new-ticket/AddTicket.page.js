import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {PageBreadcrumb} from '../../components/breadcrumb/Breadcrumb.comp'
import {AddTicketForm} from '../../components/add-ticket-form/AddTicketForm.comp'

export const AddTicket = () => {
return ( 
<div>
	<Container>
<Row>
<Col>
<PageBreadcrumb page="New Ticket" />

	</Col>
	</Row>
<Row>
<Col>
Form is here
	</Col>
	</Row>

	</Container>
	

	</div>
)

}
