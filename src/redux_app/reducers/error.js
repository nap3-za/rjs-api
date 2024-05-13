import {
	GET_ERRORS,
	CREATE_MESSAGE
} from "../actions/error/types";


const initialState = {
	message: {},
	status: null,
}

export default function(state = initialState, action) {
	switch(action.type) {
		case CREATE_MESSAGE:
			return (state = action.payload);

		case GET_ERRORS:
			return {
				message: action.payload.message,
				status: action.payload.status,
			};

		default:
			return state;
	}
}
