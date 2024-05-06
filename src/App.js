import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import Alerts from "./components/app/Alerts";

import AppRoutes from "./AppRoutes";

function App(props) {
	// const { authenticated, user } = props

	return (
		<Router>
			<div className="app">
				<div className="app-header">
					<Alerts />
				</div>

				<div className="app-content">
					<AppRoutes />
				</div>

			</div>
		</Router>
	)
}

App.propTypes = {
	authenticated: PropTypes.bool,
	user: PropTypes.object,
}

const mapStateToProps = state => ({
	authenticated: state.account.authenticated,
	user: state.account.user,
})

export default connect(mapStateToProps,{})(App);
