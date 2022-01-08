import React from "react"

import {Container, Row, Col, Button} from 'react-bootstrap'
import {TicketTable} from '../../components/ticket-table/TicketTable.comp'

import tickets from '../../assets/data/dummy-tickets.json'

import {PageBreadcrumb} from '../../components/breadcrumb/Breadcrumb.comp';


export const Dashboard = () => {
return (
	<Container className="mt-5">
<Row>
<Col>
<PageBreadcrumb page="Dashboard" />
	</Col>
	</Row>
	<Row className="mt-3">
		<Col className="text-center mt-5 mb-2">
	<Button variant="info" style={{'fontSize':' 2rem', 'padding': '10px 30px'}}>Add new Ticket</Button>
		</Col>

		</Row>
	<Row>
<Col className="text-center mt-5 mb-2">
<div> Total tickets: 50</div>

	<div> Pending Tickets: 20</div>


	</Col>
	</Row>

<Row>
	<Col>
Recently Added Tickets
	</Col>
	<hr />
	<Row>
<Col className="recent-ticket">
 <TicketTable tickets={tickets} />
	</Col>
	</Row>

	</Row>

		</Container>
);
}
