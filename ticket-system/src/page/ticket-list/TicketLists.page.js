import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {PageBreadcrumb} from "../../components/breadcrumb/Breadcrumb.comp.js";
import {SearchForm} from "../../components/search-form/SearchForm.comp"
export const TicketLists = () => {
return (
<Container>
<Row>
<Col>

    <PageBreadcrumb page="Ticket Lists" />

    </Col>
    </Row>

<Row>
<Col>
<Button variant="info">Add New Ticket</Button>

    </Col>
    <Col className="text-right">
    <SearchForm />
    </Col>
    </Row>

    </Container>

)

}
