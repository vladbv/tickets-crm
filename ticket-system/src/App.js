import React from "react";
import './App.css';
import {Button} from 'react-bootstrap'
import {Entry} from './page/entry/Entry.page';
import {DefaultLayout} from './layout/DefaultLayout.js';

import {Dashboard} from './page/dashboard/Dashboard.page';
import {AddTicket} from "./page/new-ticket/AddTicket.page";
import {TicketLists} from "./page/ticket-list/TicketLists.page";
import {Ticket} from './page/ticket/Ticket.page';

function App() {
  return (
	  <div className="App">
	  {/*<Entry /> */}
      <DefaultLayout>
      {/*<Dashboard />*/ }
      { /* <AddTicket /> */ }
      { /*  <TicketLists /> */ }
      <Ticket />
	  </DefaultLayout>
	 
	  </div>
  )
  }

export default App;
