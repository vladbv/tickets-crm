import React from 'react'
import {Form, Button} from 'react-bootstrap'
export const UpdateTicket = () => {
    return (
            <Form>
<Form.Label>Reply</Form.Label>

<Form.Control as="textarea" row="5" name="detail" />
<Button variant="info" type="submit">
        Reply
        </Button>
        </Form>
    )
}
