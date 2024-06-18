import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import { signOut } from "../../../redux_app/actions/account/actions";


function SignOut(props) {
	const { signOut } = props
	signOut()

	return (
		<Navigate to="/" />
	);
}

SignOut.propTypes = {
    signOut: PropTypes.func,
}

export default connect(null, { signOut })(SignOut);
