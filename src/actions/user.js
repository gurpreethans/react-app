import {STORE_USER} from '../constants'

export const storeUser = (data) => {
	console.log('act',data)
	return (dispatch) => {
		return dispatch({
			type: STORE_USER,
			data: data
		})
	};
};
