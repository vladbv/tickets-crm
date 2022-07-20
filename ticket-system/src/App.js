  import React from "react";
  import './App.css';
  import {Button} from 'react-bootstrap'
  import {Entry} from './page/entry/Entry.page';
  import {DefaultLayout} from './layout/DefaultLayout.js';
  import {BrowserRouter as Router,
      Switch,
      Route,
      Link
  } from "react-router-dom";
  import {Dashboard} from './page/dashboard/Dashboard.page';
  import {AddTicket} from "./page/new-ticket/AddTicket.page";
  import {TicketLists} from "./page/ticket-list/TicketLists.page";
  import {Ticket} from './page/ticket/Ticket.page';
  import {PrivateRoute} from "./components/private-route/PrivateRoute.comp";
  
  function App() {
    return (
  	  <div className="App">
        <Router> 
         <Switch>
  
         <PrivateRoute exact path="/">
        <Entry />
         </PrivateRoute>     
        
                <PrivateRoute path="/dashboard" >
        <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/add-ticket"> 
        <AddTicket />
        </PrivateRoute>
  
        <PrivateRoute path="/tickets" >
        <TicketLists />
        </PrivateRoute>
  
        <PrivateRoute path="/ticket/:tid" >
        <Ticket />
        </PrivateRoute>
        
  
       
        </Switch>
  	 </Router>
  	  </div>
    )
    }
  
  export default App;
