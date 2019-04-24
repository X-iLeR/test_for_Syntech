import {ADD, STEP} from "./constants";

let initialState = require('./init.json');
let loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case STEP:
			return {...state, step: action.payload.value};
		case ADD:
			return {...state, [action.payload.name]: action.payload.value};
		default:
			return state;
	}
};

export default loginReducer;
