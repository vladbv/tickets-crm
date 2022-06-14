import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {PageBreadcrumb} from "../../components/breadcrumb/Breadcrumb.comp.js";
import {SearchForm} from "../../components/search-form/SearchForm.comp";
import {TicketTable} from "../../components/ticket-table/TicketTable.comp";
import tickets from '../../assets/data/dummy-tickets.json';
export const TicketLists = () => {
    
    const [str, setStr] = useState('')
    useEffect( () => {}, [str]);

const handleOnChange = (e) => {
    setStr(e.target.value);
console.log(e.target);
    }
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
    <SearchForm handleOnChange={handleOnChange} str={str} />
    </Col>
    </Row>
    <hr />
<Row>
<Col>
<TicketTable tickets={tickets} />

    </Col>
    </Row>


    </Container>

)

}
