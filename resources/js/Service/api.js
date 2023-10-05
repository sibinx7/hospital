import {getAPI, postAPI} from "@/Service/request.js";

export const  getDoctorByDepartment = (departmentId) => {
	return getAPI(`/api/public/doctors/${departmentId}`)
}

export const getBookedSlotsByDoctorDate = (departmentId, doctorId, date) => {
	const body = {
		department_id: departmentId,
		doctor_id: doctorId,
		date
	}
	return postAPI(`/api/public/slot-availability`, { body })
}

export const getSlotsData = () => {
	return getAPI(`/api/public/get-all-slots`)
}


export const  bookNewAppointment = (body) => {
	console.log(body)
	// debugger
	// debugger
	return postAPI(`/api/public/book-appointment`, {
		headers: {
			'Accept': 'application/json',
			// 'Content-Type': 'multipart/form-data'
		},
		body
	})
}


export const getOnlineDoctors = () => {
  return getAPI(`/api/authenticated/online-doctors`)
}

