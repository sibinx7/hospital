import {useForm} from "@inertiajs/react";
import Datepicker from 'flowbite-datepicker/Datepicker';

import {useCallback, useEffect, useRef, useState} from "react";
import {bookNewAppointment, getBookedSlotsByDoctorDate, getDoctorByDepartment, getSlotsData} from "@/Service/api.js";


export default function MakeAppointment( { departments = []}){
	// debugger
	const elementRef = useRef(null);
	const [ doctors, setDoctors] = useState([]);
	const [ slots, setSlots] = useState([]);
	const [ bookedSlots, setBookedSlots ] = useState([]);

	const { data, setData, processing, errors, post } = useForm({
		name: '',
		email: '',
		phone: '',
		subject:'',
		description:'',
		hid: '',
		department_id: '',
		doctor_id: '',
		selected_date: '',
		selected_time: '',
		slot_id: ''
	})

	const setFieldValue = (e) => {
		if(e && e.target){
			const { name, value } = e.target;
			setData((prevData) => { return {
				...prevData,
				[name]: value
			}})
			// setData(name,value)
			if(name === 'department_id'){
				// Send API to fetch Doctors
				setDoctors([])
				if(value !== ""){
					callDoctorsByDepartment(value);
				}
			}
		}
	}

	const getAllSlots = async () => {
		try{
			const slots = await getSlotsData();
			// debugger
			if(Array.isArray(slots) && slots.length){
				setSlots(slots);
			}
		}catch(e){

		}

	}

	useEffect(() => {
		// mount
		if(elementRef && elementRef.current){
			new Datepicker(elementRef.current, {
				minDate : new Date(),
				autohide: true,
				format: 'yyyy-mm-dd'
			});
			elementRef.current.addEventListener('changeDate', ((e) => {
				// debugger
				setFieldValue(e)
			}))
		}

		getAllSlots();
		return(() => {
			// unmount
		})
	}, []);

	useEffect(() => {
		if(data.slot_id){
			const slot = slots.find((slot) => slot.id === JSON.parse(data.slot_id));
			// debugger
			if(slot){
				setData('selected_time', slot.slot_start)
			}
		}
	}, [ data.slot_id])

	useEffect(() => {
		const { department_id, doctor_id, selected_date} = data;
		if(department_id && doctor_id && selected_date){
			callSlotAvailability(department_id, doctor_id, selected_date)
		}
	}, [data.department_id, data.doctor_id, data.selected_date]);

	const callDoctorsByDepartment = async (id) => {
		const availableDoctors = await getDoctorByDepartment(id);
		setDoctors(availableDoctors);
	}

	const callSlotAvailability = async (departmentId, doctorId, date) => {
		// debugger
		let bookedSlotIds = [];
		const bookedSlots = await getBookedSlotsByDoctorDate(departmentId, doctorId, date);
		// debugger
		if(Array.isArray(bookedSlots) && bookedSlots.length){
			bookedSlotIds = bookedSlots.map((item) => item.slot_id);
		}
		setBookedSlots(bookedSlotIds);
	}





	const submit = async (e) => {
		e.preventDefault();
		// debugger
		// const newAppointment = await post('/api/public/book-appointment')
		const appoint = await bookNewAppointment(data)
		debugger

	}
	return(
		<>
			<div>
				<form action="" method={`post`} onSubmit={ submit }>
					<div className="container">
						<div className="grid grid-cols-6 gap-4">
							<div className="col-span-5">
								<div className="grid grid-cols-1">
									<div className="w-full">
										<div className="flex w-full mb-3">
											<input type="text" className="w-full h-12 border-sky-500" name="subject"
														 placeholder="Your Subject" value={data.subject}
														 onChange={ e => setFieldValue(e)}
											/>
										</div>
									</div>
									<div className="w-full">
										<div className="flex w-full mb-3">
											<textarea name="description" id="" cols="30" rows="2" className="w-full border-sky-500"
																placeholder="Your description" value={data.description}
																onChange={ e => setFieldValue(e)}
											></textarea>
										</div>
									</div>
								</div>
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
												<select name="department_id" id="" placeholder={`Select Department`} value={data.department_id} className={`w-full h-12 border-sky-500`}
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
													errors.department_id && (
														<div className={``}>
															{ errors.department_id }
														</div>
													)
												}
											</div>
											<div className="flex w-full mb-3">
												<select name="doctor_id" id="" placeholder={`Select Doctor`} value={data.doctor_id} className={`w-full h-12 border-sky-500`}
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
													errors.doctor_id && (
														<>
															<div className="">
																{ errors.doctor_id }
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
													<input type="text" ref={elementRef} name={`selected_date`} placeholder={`Select Date`} value={data.selected_date} className="w-full pl-10 h-12 border-sky-500"
																 onChange={ e => setFieldValue(e)}
													/>
												</div>

												{
													errors.selected_date && (
														<>
															<div className="">
																{ errors.selected_date }
															</div>
														</>
													)
												}
											</div>
											<div className="flex w-full">
												<select  name={`slot_id`} placeholder={`Select Slot`} value={data.slot_id} className="w-full h-12 border-sky-500"
															 onChange={ e => setFieldValue(e)}
												>
													<option value="">Select</option>
													{
														slots.length && (
															<>
																{
																	slots.map((slot, item) => {
																		return <option data-slot={slot.id} data-slot-name={slot.slot} key={slot.id} value={slot.id} disabled={ (bookedSlots.includes(slot.id)) ? true: null}  >
																			{ slot.slot_start} - { slot.slot_stop}
																		</option>
																	})
																}
															</>
														)
													}
												</select>
												{
													errors.slot_id && (
														<>
															<div className="">
																{ errors.slot_id }
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
									<button type={`submit`}
													disabled={ processing }
													className={`w-full h-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
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
