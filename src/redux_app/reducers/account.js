
import {
	LOAD_USER,

	SIGN_IN,
	SIGN_UP,
	SIGN_OUT,
	PASSWORD_RESET,

} from "../actions/account/types";


const token = localStorage.getItem("restapitoken")
const initialState = {
	token,
	user: null,
	authenticated: false,
}


export default function(state = initialState, action) {
	switch(action.type) {
		case SIGN_OUT:
			localStorage.removeItem("restapitoken");
			return {
				token: null,
				
				user: null,
				authenticated: false,
			};

		case LOAD_USER:
			localStorage.setItem("restapitoken", action.payload.token);
			return {				
				...action.payload,
				authenticated: true,
			};

		case SIGN_IN:
		case PASSWORD_RESET:
		case SIGN_UP:
			localStorage.setItem("restapitoken", action.payload.token);
			return {
				...state,				
				...action.payload,
				authenticated: true,
			};

		default:
			return state;
	}
}
