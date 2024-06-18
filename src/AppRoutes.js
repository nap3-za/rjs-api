import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PropTypes from  "prop-types"
import { connect } from "react-redux";

import Index from "./pages/app/Index";
import SignIn from "./pages/account/authentication/SignIn";
import SignUp from "./pages/account/authentication/SignUp";
import SignOut from "./pages/account/authentication/SignOut";

import {
	URL_SIGN_IN,
	URL_SIGN_UP,
	URL_SIGN_OUT
} from "./AppUrls";



function AppRoutes(props) {
	const { authenticated } = props;
	
	if (authenticated) {
		return <Routes>
			<Route exact path="/" element={<Index />} />
	 		<Route exact path={URL_SIGN_OUT} element={<SignOut />} />	
		</Routes>
	} else {
		return <Routes>
	 		<Route exact path="/" element={<Index />} />
	 		<Route exact path={URL_SIGN_IN} element={<SignIn />} />
	 		<Route exact path={URL_SIGN_UP} element={<SignUp />} />
		</Routes>
	}
}

AppRoutes.propTypes = {
    authenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    authenticated: state.account.authenticated,
})

export default connect(mapStateToProps)(AppRoutes);