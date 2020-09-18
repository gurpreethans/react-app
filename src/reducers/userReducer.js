import {STORE_USER} from '../constants'

const initialState = {users: []}

export const user = (state = initialState, action) => {
	switch (action.type) {
		case STORE_USER: {
			console.log('reducer', state)
			return {
				...state,
				users: state.users.push(action.data)
			};
		}

		default:
			return state;
	}
};