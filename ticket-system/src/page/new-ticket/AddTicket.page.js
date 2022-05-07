import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {PageBreadcrumb} from '../../components/breadcrumb/Breadcrumb.comp'
import {AddTicketForm} from '../../components/add-ticket-form/AddTicketForm.comp'

import {shortText} from '../../utils/validation';

const initialFrmDt = {
 subject: '',
 issueDate: '',
    detail: '',


};

const initialFrmError = {
 subject: false,
 issueDate: false,
    detail: false,

};



export const AddTicket = () => {
	const [frmData, setFrmData] = useState(initialFrmDt)
	const [frmDataError, setFrmDataError] = useState(initialFrmError)
useEffect(() => {}, [frmData, frmDataError]);	

const handleOnChange = (e) => {

const {name, value} = e.target;



setFrmData({
...frmData,
   [name]: value,


});

		console.log(name, value);

	};

const handleOnSubmit = async (e) => {
e.preventDefault();

setFrmDataError(initialFrmError); 
const isSubjectValid = await shortText(frmData.subject)

    setFrmDataError({
   ...initialFrmError,  
      subject: !isSubjectValid,
    }); 
    
console.log('Form submit request is received', frmData);

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
<AddTicketForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} frmDataError = {frmDataError}  frmDt = {frmData} />
	</Col>
	</Row>

	</Container>
	

	</div>
)

}
