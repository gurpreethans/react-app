import {STORE_USER} from '../constants'

export const storeUser = (data) => {
	return (dispatch) => {
		dispatch({
			type: STORE_USER,
			data: data
		})
		return new Promise ((resolve, reject) => resolve({status: 'success'}))
	};
};
