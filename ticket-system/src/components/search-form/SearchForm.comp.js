import React from 'react'
import {useDispatch} from 'react-redux'
import {Form, Row, Col} from 'react-bootstrap'

export const SearchForm = () => {

    const handleOnChange = (e) => {
        const {name, value} = e.target
        console.log(e.target )
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

