import axios from "axios";

import { tokenConfigurator } from "../../../Utilities";
import { returnErrors } from "../error/actions";

import {
	EP_LOAD_USER,
	EP_SIGN_IN,
	EP_SIGN_OUT,
	EP_SIGN_UP,
} from "../../../AppEndpoints";

import {
	SIGN_UP,
	SIGN_IN,
	SIGN_OUT,

	LOAD_USER,
} from "./types";


export const loadUser = () => (dispatch, getState) => {
	axios.get(EP_LOAD_USER, tokenConfigurator(getState))
		.then(response => {
			dispatch({
				type: LOAD_USER,
				payload: response.data
			});
		}).catch(error => {
			// Don't do anything if the user cannot be loaded
			// It is not an error, the user is not logged in
		})
}

export const signIn = (formData) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		}
	}
	const body = JSON.stringify(formData);

	axios.post(EP_SIGN_IN, body, config)
		.then(response => {
			dispatch({
				type: SIGN_IN,
				payload: response.data,
			});
		}).catch(error => {
			if (error.response) {
				dispatch(returnErrors(error.response.data, error.response.status))
			}
		})
}

export const signUp = (formData) => dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json",
			// Custom Header Here
		}
	}
	const body = JSON.stringify(formData);

	axios.post(EP_SIGN_UP, body, config)
		.then(response => {
			dispatch({
				type: SIGN_UP,
				payload: response.data,
			});
		}).catch(error => {
			if (error.response) {
				dispatch(returnErrors(error.response.data, error.response.status))
			}
		})
}

export const signOut = () => (dispatch, getState) => {
	const token =  getState().authentication.token;

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

export const forgotPassword = (formData) => dispatch => {
	// Do the things
}
