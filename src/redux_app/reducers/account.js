
import {
	LOAD_USER,

	SIGN_IN,
	SIGN_UP,
	SIGN_OUT,

} from "../actions/account/types";


const token = localStorage.getItem("restapitoken")
const initialState = {
	token,
	user: null,
	authenticated: false,
}


export default function(state = initialState, action) {
	switch(action.type) {
		case LOAD_USER:
			return {
				...state,
				user: action.payload,
			};

		case SIGN_OUT:
			localStorage.removeItem("restapitoken");
			return {
				token: null,
				
				user: null,
				authenticated: false,
			};

		case SIGN_IN:
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
