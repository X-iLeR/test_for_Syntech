import {ADD, STEP} from "./constants";

export let NextStep = (value) => {
	return {
		type: STEP,
		payload: {
			value
		}
	}
};

export let add_field = (name, value) => {
	return {
		type: ADD,
		payload: {
			name, value
		}
	}
};
