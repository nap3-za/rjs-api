import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Alerts from "./components/app/Alerts";
import Header from "./components/app/Header";
import Footer from "./components/app/Footer";
import Loading from "./components/app/Loading";

import AppRoutes from "./AppRoutes";


function App(props) {
	// const { authenticated, user } = props
	const { loading } = props

	return (
		<Router>
			<div className="app">
				<Header />
				<Alerts />

				{loading ? <Loading /> : <AppRoutes /> }
				
				<Footer />
			</div>
		</Router>
	)
}

App.propTypes = {
	authenticated: PropTypes.bool,
	user: PropTypes.object,
	loading: PropTypes.bool,
}

const mapStateToProps = state => ({
	authenticated: state.account.authenticated,
	user: state.account.user,
	loading: state.app.loading
})

export default connect(mapStateToProps,{})(App);
