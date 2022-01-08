import React from 'react';

import {Header} from './partials/Header.comp';
import {Footer} from './partials/Footer.comp';

export const DefaultLayout = ({children}) => {
return(
	<div className="default-layout">
<header className="header mb-5">

	<Header />
	</header>

<main style={{zIndex:"99999999999999"}} className="p-5 main">
{children}
	</main>

	<footer className="footer">
	<Footer />
	</footer>

	</div>
)

}
