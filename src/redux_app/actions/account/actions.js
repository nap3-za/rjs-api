import axios from "axios";

import { tokenConfigurator } from "../../../Utilities";
import { returnErrors } from "../error/actions";

import {
	EP_LOAD_USER,
	EP_SIGN_IN,
	EP_SIGN_OUT,
	EP_SIGN_UP,
	EP_PASSWORD_RESET,
} from "../../../AppEndpoints";

import {
	SIGN_UP,
	SIGN_IN,
	SIGN_OUT,
	PASSWORD_RESET,

	LOAD_USER,
} from "./types";

import {
	LOADING_ON,
	LOADING_OFF,	
} from "../app/types";


export const loadUser = () => (dispatch, getState) => {
	dispatch({type: LOADING_ON});
	axios.get(EP_LOAD_USER, tokenConfigurator(getState))
		.then(response => {
			dispatch({
				type: LOAD_USER,
				payload: response.data
			});
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			// Don't do anything if the user cannot be loaded
			// It is not an error, the user is not logged in
			dispatch({type: LOADING_OFF});
		})
}

export const signIn = (formData) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		}
	}
	const body = JSON.stringify(formData);

	dispatch({type: LOADING_ON});
	axios.post(EP_SIGN_IN, body, config)
		.then(response => {

			dispatch({
				type: SIGN_IN,
				payload: response.data,
			});
			dispatch({type: LOADING_OFF});

		}).catch(error => {
			if (error.response) {
				dispatch(returnErrors(error.response.data, error.response.status))
			}
			dispatch({type: LOADING_OFF});
		}
	)
}

export const signUp = (formData) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json",
			// Custom Header Here
		}
	}
	const body = JSON.stringify(formData);

	dispatch({type: LOADING_ON});
	axios.post(EP_SIGN_UP, body, config)
		.then(response => {
			dispatch({
				type: SIGN_UP,
				payload: response.data,
			});
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			if (error.response) {
				dispatch(returnErrors(error.response.data, error.response.status))
			}
			dispatch({type: LOADING_OFF});
		}
	)
}

export const signOut = () => (dispatch, getState) => {
	axios.post(EP_SIGN_OUT, null, tokenConfigurator(getState))
		.then(response => {
			dispatch({
				type: SIGN_OUT,
				payload: response.data
			});

		}).catch(error => {
			if (error.response) {
				dispatch(returnErrors(error.response.data, error.response.status))
			}
		})
}

export const passwordReset = (formData) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		}
	}
	const body = JSON.stringify(formData);

	dispatch({type: LOADING_ON});
	axios.post(EP_PASSWORD_RESET, body, config)
		.then(response => {
			dispatch({
				type: PASSWORD_RESET,
				payload: response.data,
			});
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			if (error.response) {
				dispatch(returnErrors(error.response.data, error.response.status))
			}
			dispatch({type: LOADING_OFF});
		}
	)
}