import {STORE_USER} from '../constants'

const initialState = {users: []}

export const usersList = (state = initialState, action) => {
	switch (action.type) {
		case STORE_USER: {
			state.users.push(action.data)
			return {
				...state,
				users: state.users
			};
		}

		default:
			return state;
	}
};