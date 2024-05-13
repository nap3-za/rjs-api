import { CREATE_MESSAGE } from "./types";
import { GET_ERRORS } from "../error/types";


export const createMessage = message => {
	return {
		type: CREATE_MESSAGE,
		payload: message
	}
}

export const returnErrors = (message, status) => {
	return {
		type: GET_ERRORS,
		payload: {
			message,
			status,
		}
	}
}
