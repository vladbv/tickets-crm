import React from 'react'
import { useSelector } from 'react-redux'
import {Table} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export const TicketTable = () => {

	const {tickets, isLoading, error} = useSelector(state => state.tickets)
return( 
<Table striped bordered hover>
	<thead>
<tr>
<th>#</th>
	<th>Subjects</th>

	<th>Status</th>
	<th>Opened Date</th>
	</tr>
	</thead>
	<tbody>
	{tickets.length ? (tickets.map((row) =>   
<tr>
<td>{row.id}</td>
	<td>
 <Link to={`/ticket/${row.id}`}>
        {row.subject}
</Link>
        </td>


	<td>{row.status}</td>
	<td>{row.addedAt}</td>
	</tr>
	))
		:(

<tr>
			<td colSpan="4" className="text-center">No ticket to show</td>
</tr>)	}

	
	</tbody>



	</Table>
	
)

}


