import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {PageBreadcrumb} from '../../components/breadcrumb/Breadcrumb.comp'
import {AddTicketForm} from '../../components/add-ticket-form/AddTicketForm.comp'

export const AddTicket = () => {
	
	const handleOnChange = (e) => {
const {name, value} = e.target
		console.log(name, value);
	};

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
<AddTicketForm handleOnChange={handleOnChange} />
	</Col>
	</Row>

	</Container>
	

	</div>
)

}
