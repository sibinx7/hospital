import {useForm} from "@inertiajs/react";
import Datepicker from 'flowbite-datepicker/Datepicker';

import {useEffect, useRef, useState} from "react";
import {getDoctorByDepartment} from "@/Service/api.js";


export default function MakeAppointment( { departments = []}){
	// debugger
	const elementRef = useRef(null);
	const [ doctors, setDoctors] = useState([]);
	const { data, setData, processing, errors } = useForm({
		name: '',
		email: '',
		phone: '',
		hid: '',
		departments: '',
		doctor: '',
		date: '',
		slot: ''
	})

	useEffect(() => {
		// mount
		if(elementRef && elementRef.current){
			new Datepicker(elementRef.current, {
				minDate : new Date(),
				autoHide: true
			})
		}
		return(() => {
			// unmount
		})
	}, []);


	const callDoctorsByDepartment = async (id) => {
		const availableDoctors = await getDoctorByDepartment(id);
		setDoctors(availableDoctors);
	}

	const setFieldValue = (e) => {
		if(e && e.target){
			const { name, value } = e.target;
			setData(name, value)
			if(name === 'department'){
				// Send API to fetch Doctors
				setDoctors([])
				if(value !== ""){
					callDoctorsByDepartment(value);
				}

			}

		}
	}



	const submit = (e) => {
		e.preventDefault();
	}
	return(
		<>
			<div>
				<form action="" method={`post`} onSubmit={ submit }>
					<div className="container">
						<div className="grid grid-cols-6 gap-4">
							<div className="col-span-5">
								<div className="grid grid-cols-2 gap-4">
									<div>
										<div className="w-full">
											<div className="flex w-full mb-3">
												<input type="text" name={`name`} value={data.name} placeholder={`Your Name`}
															 className="w-full h-12 border-sky-500"
															 onChange={ e => setFieldValue(e)}
												/>
												{
													errors.name && (<>
														<div className={``}>
															{ errors.name }
														</div>
													</>)
												}
											</div>
											<div className="flex w-full mb-3">
												<input type="text" name={`email`} value={data.email } placeholder={`Your Email`} className="w-full h-12 border-sky-500"
															 onChange={ e => setFieldValue(e)}
												/>
												{
													errors.email && (
														<>
															<div className="">
																{ errors.email}
															</div>
														</>
													)
												}
											</div>
											<div className="flex w-full mb-3">
												<input type="text" name={`phone`} value={data.phone} placeholder={`Your Phone`} className="w-full h-12 border-sky-500"
															 onChange={ e => setFieldValue(e)}
												/>
												{
													errors.phone && (
														<>
															<div className="">
																{ errors.phone }
															</div>
														</>
													)
												}
											</div>
											<div className="flex w-full">
												<input type="text" name={`hid`} value={data.hid} placeholder={`Your Hospital ID`} className="w-full h-12 border-sky-500"
															 onChange={ e => setFieldValue(e)}
												/>
												{
													errors.hid && (
														<>
															<div className="">
																{ errors.hid }
															</div>
														</>
													)
												}
											</div>
										</div>
									</div>
									<div>
										<div className="w-full">
											<div className="flex w-full mb-3">
												<select name="department" id="" placeholder={`Select Department`} value={data.department} className={`w-full h-12 border-sky-500`}
																onChange={ e => setFieldValue(e)}
												>
													<option value="">Select</option>
													{
														departments.length && (
															<>
																{
																	departments.map((item, index) => {
																		return <option key={item.department_id} value={item.department_id}>{ item.department_name}</option>
																	})
																}
															</>
														)
													}

												</select>
												{
													errors.department && (
														<div className={``}>
															{ errors.department }
														</div>
													)
												}
											</div>
											<div className="flex w-full mb-3">
												<select name="doctor" id="" placeholder={`Select Doctor`} value={data.doctor} className={`w-full h-12 border-sky-500`}
																onChange={ e => setFieldValue(e)}
												>
													<option value="">Select</option>
													{
														doctors.length && (
															<>
																{
																	doctors.map((doctor, index) => {
																		return <option key={doctor.doctor_id} value={doctor.doctor_id}>{ doctor.doctor_name}</option>
																	})
																}
															</>
														)
													}
												</select>
												{
													errors.doctor && (
														<>
															<div className="">
																{ errors.doctor }
															</div>
														</>
													)
												}
											</div>
											<div className="flex w-full mb-3">
												<div className="w-full relative">
													<div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
														<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
															<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
														</svg>
													</div>
													<input type="text" ref={elementRef} name={`date`} placeholder={`Select Date`} value={data.date} className="w-full pl-10 h-12 border-sky-500"
																 onChange={ e => setFieldValue(e)}
													/>
												</div>

												{
													errors.date && (
														<>
															<div className="">
																{ errors.date }
															</div>
														</>
													)
												}
											</div>
											<div className="flex w-full">
												<input type="text" name={`slot`} placeholder={`Select Slot`} value={data.slot} className="w-full h-12 border-sky-500"
															 onChange={ e => setFieldValue(e)}
												/>
												{
													errors.slot && (
														<>
															<div className="">
																{ errors.slot }
															</div>
														</>
													)
												}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className={`w-full h-full`}>
									<button type={`submit`} className={`w-full h-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
										<span>Submit</span>
									</button>
								</div>
							</div>
						</div>

					</div>
				</form>
			</div>
		</>
	)
}
