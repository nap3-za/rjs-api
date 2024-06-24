import {

	LOADING_ON,
	LOADING_OFF,

} from "../actions/app/types";


const initialState = {
	loading: false,
}

export default function(state = initialState, action) {
	switch(action.type) {
		case LOADING_ON:
			console.log("Loading On");
			return {
				loading: true,
			};
			
		case LOADING_OFF:
			return {
				loading: false,
			};

		default:
			return state;
	}
}
