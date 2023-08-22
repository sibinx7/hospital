import {getAPI} from "@/Service/request.js";

export const  getDoctorByDepartment = (departmentId) => {
	return getAPI(`/api/public/doctors/${departmentId}`)
}
