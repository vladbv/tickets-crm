import React from 'react'
import {useDispatch} from 'react-redux'
import {filterSearchTicket} from '../../page/ticket-list/ticketsActions'
import {Form, Row, Col} from 'react-bootstrap'

export const SearchForm = () => {

    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        const {name, value} = e.target
        
        dispatch(filterSearchTicket(value))
    }
    return (
    <div>
<Form>
<Form.Group as={Row}>
    <Form.Label column sm={3}>Search:</Form.Label>
    <Col sm="9">
<Form.Control name="searchStr" onChange={handleOnChange} placeholder="Search ..." />
</Col>
    </Form.Group>
    </Form>
</div>
);

}

