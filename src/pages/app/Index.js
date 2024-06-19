import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Index() {
	return (
		<Fragment>
			This IS The Home Page
			<Link to="/sign-in/">Sign In</Link>
		</Fragment>
	);
}

export default Index;
