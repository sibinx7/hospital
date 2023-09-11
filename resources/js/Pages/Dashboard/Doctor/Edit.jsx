import {Head, useForm} from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Edit({ auth, doctor, user }){

	delete doctor.user // No need extra user, user already available
	const { data, post, processing, setData} = useForm({
		doctor,
		user
	})

	const setFormData = (e, key) => {
		const { target: { name, value }} = e;
		const nameKey = name.split('.')
		let dataChild = data[nameKey[0]];
		dataChild = {
			...dataChild,
			[nameKey[1]]: value
		}
		setData({
			...data,
			[nameKey[0]]: dataChild
		})
	}

	return(
		<>
			<AuthenticatedLayout
				user={auth.user}
				header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
			>
				<Head title="Doctor" />
				<div>
					<div className="max-w-7xl mx-auto">
						<div className="relative overflow-x-auto p-6">
							<div>
								{ JSON.stringify(data.doctor)}
							</div>
							<div className={`block p-6 bg-white border border-gray-200 rounded-lg shadow`}>
								<div className="flex flex-row">
									<div className="basis-4/12">

									</div>
									<div className="basis-8/12">
										<div className="block mb-3">
											<h3 className={`prose-h4 mb-3 text-2xl`}>Doctor Information</h3>
											<div className="columns-2 flex">
												<div className="w-full">
													<div className="block mb-3">
														<label htmlFor="doctor-name" className={`mb-1`}>Name</label>
														<input id={`doctor-name`} name={`doctor.name`} type="text" value={data.doctor.name} placeholder={`Name`} className="w-full rounded border-slate-300 h-12 shadow"
															onChange={(e) => setFormData(e, 'doctor')}
														/>
													</div>
													<div className="block">
														<label htmlFor="" className={`mb-1`}>Speciality</label>
														<input type="text" id="doctor-speciality" name={`doctor.speciality`} value={data.doctor.speciality} placeholder={`Speciality`}
													 		className="w-full rounded border-slate-300 h-12 shadow"
															onChange={(e) =>setFormData(e, 'doctor')}
														/>
													</div>
												</div>
												<div className="w-full">
													<div className="block mb-3">

													</div>
												</div>
											</div>
										</div>
										<div className="block">
											<label htmlFor="" className={`mb-1`}>Bio</label>
											<div className={`w-full`}>
												<CKEditor
													name={`doctor.bio`}
													editor={ ClassicEditor }
													data={ data.doctor.bio}
													onReady={ editor => {
														// You can store the "editor" and use when it is needed.
														console.log( 'Editor is ready to use!', editor );
													} }
													onChange={ ( event, editor ) => {
														const data = editor.getData();
														const e = {
															target: {
																name: 'doctor.bio',
																value: data
															}
														}
														setFormData(e)
													} }
												/>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</AuthenticatedLayout>
		</>
	)
}
