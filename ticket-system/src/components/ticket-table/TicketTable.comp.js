import React from 'react'
import { useSelector } from 'react-redux'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export const TicketTable = () => {

	const {tickets, isLoading, error} = useSelector((state) => state.tickets)

if (isLoading) return <h2>Loading... </h2>
if (error) return <h2>Error...</h2>
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
	{ tickets.length ? (
		tickets.map((row) =>   (
<tr key={row._id}>
<td>{row._id}</td>
	<td>
 <Link to={`/ticket/${row._id}`}>
        {row.subject}
</Link>
        </td>


	<td>{row.status}</td>
	<td>{row.openAt}</td>
	</tr>
	))
	)	: (

<tr>
			<td colSpan="4" className="text-center">No ticket to show</td>

</tr>

)}

	
	</tbody>



	</Table>
	
)

}


