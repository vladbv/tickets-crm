import React from 'react'

import {Form, Row, Col} from 'react-bootstrap'

export const SearchForm = () => {
return (
    <div>
<Form>
<Form.Group as={Row}>
    <Form.Label column sm={2}>Search:</Form.Label>
    <Col sm="9">
<Form.Control name="searchStr" placeholder="Search ..." />
</Col>
    </Form.Group>
    </Form>
</div>
);

}
