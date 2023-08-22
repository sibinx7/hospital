import {urPK} from "@mui/material/locale";

export const fetchAPI = async (url, options) => {
	const response = await  fetch(url, {
		...options
	})
	return response.json();
}

export const getAPI = (url, option) => {
	return fetchAPI(url, {
		...option,
		method: 'get'
	})
}
export const postAPI = (url, option) => {
	return fetchAPI(url, {
		...option,
		method: 'post'
	})
}



export const putAPI = (url, option) => {
	return fetchAPI(url, {
		...option,
		method: 'put'
	})
}

export const patchAPI = (url, option) => {
	return fetchAPI(url, {
		...option,
		method: 'patch'
	})
}

export const deleteAPI = (url, option) => {
	return fetchAPI(url, {
		...option,
		method: 'delete'
	})
}


