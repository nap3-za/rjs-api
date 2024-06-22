import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Index() {
	return (
		<section className="h-screen">
			This IS The Home Page
			<Link to="/sign-in/">Sign In</Link>
			<Link to="/sign-up/">Sign Up</Link>
		</section>
	);
}

export default Index;
