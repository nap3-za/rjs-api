import React, { Fragment, useEffect, } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withAlert } from "react-alert";
import { usePrevious } from "../../Utilities";

function Alerts(props) {

	const { error, alert } = props
	const prevError = usePrevious(error)
	// const prevMessage = usePrevious(message)

	useEffect(
		() => {
			if (error.message && error !== prevError) {
				for (const [key, value] of Object.entries(error.message)) {
					alert.error(`${key}: ${value}`)
				}
			}

			// if (message !== prevMessage) {
			// 	if (message.message) alert.info(message.message)
			// }
		}
	)
	return <Fragment />
}

Alerts.propTypes = {
	error: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	error: state.error,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
