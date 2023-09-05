import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router, useForm} from "@inertiajs/react";

export default function Index({ auth, departments }){

	const form = useForm({});
	const handleDelete = (e, department) => {
		form.delete(`/dashboard/department/${department.id}`)
	}

	return(
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
								<div>
									<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
										<thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
										<tr>
											<th scope="col" className="px-6 py-3">
												Department Name
											</th>
											<th scope="col" className="px-6 py-3">
												Description
											</th>
											<th scope="col" className="px-6 py-3">
												Image
											</th>
											<th scope="col" className="px-6 py-3">
												Icon
											</th>
											<th scope={`col`} className={`px-6 py-3`}>
												Action
											</th>
										</tr>
										</thead>
										<tbody>
										{
											(departments && departments.data) && (
												<>
													{
														departments.data.map((department, departmentIndex) => {
															return(
																<tr key={department.id} className="bg-white border-b ">
																	<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
																		{ department.name }
																	</th>
																	<td className="px-6 py-4">
																		<p className={`mb-0`}>
																			{ department.description}
																		</p>
																	</td>
																	<td className="px-6 py-4">
																		{
																			(department.image) && <img className={`w-11`} src={department.image} alt={department.name}/>
																		}
																	</td>
																	<td className="px-6 py-4">
																		{
																			(department.icon) && <img className={`w-11`} src={department.icon} alt={department.name}/>
																		}
																	</td>
																	<td className={`px-6 py-4`}>
																		<div className="columns-2 flex">
																			<Link href={`/dashboard/department/${department.id}/edit`}>
																				Edit
																			</Link>
																			<button className={`ml-3`} onClick={ e => handleDelete(e, department)}>
																				Delete
																			</button>
																		</div>
																	</td>
																</tr>
															)
														})
													}
												</>
											)
										}

										</tbody>
									</table>
								</div>

								<div>
									{
										departments.links && (<>
											<nav aria-label="Page navigation example" className={`flex justify-center mx-auto my-5`}>
												<ul className="inline-flex -space-x-px text-base h-10">

													{
														departments.links.map((link, linkIndex) => {
															return (
																<li key={linkIndex}>
																	<a href={ link.url }
																		 dangerouslySetInnerHTML={{__html:  link.label }}
																		 className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">

																	</a>
																</li>
															)
														})
													}

												</ul>
											</nav>
										</>)
									}
								</div>
							</div>

						</div>

					</div>

				</div>
			</AuthenticatedLayout>
			</>
	)
}
