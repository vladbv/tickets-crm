import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {PageBreadcrumb} from '../../components/breadcrumb/Breadcrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import {MessageHistory} from '../../components/message-history/MessageHistory.comp'
import {UpdateTicket} from '../../components/update-ticket/UpdateTicket.comp'
const ticket = tickets[0];

export const Ticket = () => {
return (
<Container>
<Row>
<Col>
<PageBreadcrumb page="Ticket" />
    </Col>
    </Row>
    <Row>
    <Col>
<div className="subject">Subject: {ticket.subject}</div>
<div className="date">Date: {ticket.addedAt}</div>
<div className="status">Status: {ticket.status}</div>
    </Col>
    <Col className="text-right">
<Button variant="outline-info">Close Ticket</Button>
    </Col>
    </Row>
    <Row className="mt-4">
        <Col>
        <MessageHistory msg={ticket.history} />
    </Col>
    </Row>
    <hr />
 <Row className="mt-4">
        <Col>
    <UpdateTicket />
    </Col>
    </Row>
    </Container>
)
}
