import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const Footer = () =>{
const locale = 'en';

const [time, setTime] = useState(new Date());

	React.useEffect(() => {

const timer = setInterval( () => {

setTime(new Date());
}, 60 * 1000);
		return () => {
clearInterval(timer);
		}
	}, []);

  const day = time.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${time.getDate()} ${time.toLocaleDateString(locale, { month: 'long' })}\n\n`;

  const hour = time.getHours();
  const greeting = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

  const timep = time.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });



return <div className="text-center copy-right"> &copy; All rights reserved - Tickets System - {greeting} it's  {timep} </div>
}
