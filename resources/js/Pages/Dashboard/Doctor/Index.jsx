import {Head, Link} from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function Index({ auth, doctorsList }){

	const { data } = doctorsList;

	const deleteDoctor = (e, doctor) => {
		e.preventDefault();
	}
	return (
		<>
			<AuthenticatedLayout
				user={auth.user}
				header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
			>
				<Head title="Department" />
				<div>
					<div className="max-w-7xl mx-auto">
						<div className="relative overflow-x-auto p-6">
							<div className={`block p-6 bg-white border border-gray-200 rounded-lg shadow`}>
			<div className="flex flex-col">
				<div className="overflow-x-auto">
					<div className="inline-block min-w-full align-middle">
						<div className="overflow-hidden shadow">

							<table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
								<thead className="bg-gray-100 dark:bg-gray-700">
								<tr>
									<th scope="col" className="p-4">
										<div className="flex items-center">

										</div>
									</th>
									<th
										scope="col"
										className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
									>
										Name
									</th>
									<th
										scope="col"
										className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
									>
										Biography
									</th>
									<th
										scope="col"
										className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
									>
										Position
									</th>
									<th
										scope="col"
										className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
									>
										Country
									</th>
									<th
										scope="col"
										className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
									>
										Status
									</th>
									<th
										scope="col"
										className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
									>
										Actions
									</th>
								</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
								{ data.map((doctor, index) => {
									return(
										<>
											<tr key={doctor.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
												<td className="w-4 p-4">
													<div className="flex items-center">

													</div>
												</td>
												<td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
													{
														doctor.profile_picture && <img
															className="w-10 h-10 rounded-full"
															src={ doctor.profile_picture }
															alt={doctor.name}
														/>
													}

													<div className="text-sm font-normal text-gray-500 dark:text-gray-400">
														<div className="text-base font-semibold text-gray-900 dark:text-white">
															{ doctor.name }
														</div>
														<div className="text-sm font-normal text-gray-500 dark:text-gray-400">

														</div>
													</div>
												</td>
												<td
													className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
													<div dangerouslySetInnerHTML={{ __html: doctor.short_bio}}>

													</div>
												</td>
												<td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
														<span>{ doctor.speciality }</span>
												</td>
												<td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
													<span>{ doctor.country || 'India'}</span>
												</td>
												<td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
													<div className="flex items-center">
														{
															doctor.available ?
																<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" title={`Active`}/>:
																<div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2" title={`Inactive`}/>
														}
													</div>
												</td>
												<td className="p-4 space-x-2 whitespace-nowrap">
													<Link href={``}
														type="button"
														data-modal-toggle="edit-user-modal"
														className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
													>
														<svg
															className="w-4 h-4 mr-2"
															fill="currentColor"
															viewBox="0 0 20 20"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
															<path
																fillRule="evenodd"
																d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
																clipRule="evenodd"
															/>
														</svg>
														Edit
													</Link>
													<button
														type="button"
														data-modal-toggle="delete-user-modal"
														className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
														onClick={(e) => deleteDoctor(e, doctor)}
													>
														<svg
															className="w-4 h-4 mr-2"
															fill="currentColor"
															viewBox="0 0 20 20"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fillRule="evenodd"
																d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
																clipRule="evenodd"
															/>
														</svg>
														Delete
													</button>
												</td>
											</tr>
										</>
									)
								})}
								</tbody>
							</table>
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
