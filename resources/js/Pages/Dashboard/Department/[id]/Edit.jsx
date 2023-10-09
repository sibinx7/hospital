import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from "@inertiajs/react";
import {useState} from "react";

export default function Edit({ auth, department }){
	// debugger

	const id = department.id;

	const { data, setData, processing, put, post } = useForm({
		_method: 'put',
		name: '',
		description: '',
		image: '',
		icon: '',
		...department
	})

	const [ iconPath, setIconPath ] = useState(data.icon);
	const [ imagePath, setImagePath ] = useState(data.image);

	const submit = (e) => {
		e.preventDefault();
		post(`/dashboard/department/${id}/update`, {
			_method: 'put',
			...data
		})
	}

	const handleImageUpload = (e) => {

		const fileReader = new FileReader();
		fileReader.onload = function(ef){
			if(ef && ef.target){
				const { result } = ef.target;
				if(e.target.name  === 'icon'){
					setIconPath(result)
				}else if (e.target.name === 'image'){
					setImagePath(result);
				}
			}
		}
		fileReader.readAsDataURL(e.target.files[0]);


		setData(e.target.name, e.target.files[0])
	}



	return(
		<>
			<AuthenticatedLayout
				user={auth.user}
				header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
			>
				<Head title="Department" />
				<div>
					<div className="w-full mx-auto">
						<div className="relative overflow-x-auto p-6">
							<div className={`block p-6 bg-white border border-gray-200 rounded-lg shadow`}>
								<form onSubmit={submit } encType={`multipart/form-data`} action="" method={`post`}>
									<input type="hidden" name={`_method`} value={`put`}/>
                  <div className="flex flex-col w-full mb-5">
                    <div className="form-group mb-5">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department_name">
													Department Name
                      </label>
                      <input name={`name`} disabled={true} readOnly={true} value={data.name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="department-name" type="text" placeholder="Department Name"
                        onChange={e => setData(e.target.name, e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department_description">
                        Description
                      </label>
                      <textarea name={`description`}  cols="30" rows="10" 
                        value={ data.description}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="department-description" type="text" placeholder="Department Description" onChange={e => setData(e.target.name, e.target.value) }>                      
                        { data.description }
                      </textarea>												
                    </div>
                  </div>
									<div className="gap-4 columns-2 flex">
										<div className="w-full flex flex-col">
											<div className="form-group mb-5">
												<label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="">Image</label>
												{
													imagePath && (
														<div className={`mt-3`}>
															<img className='h-96' src={ imagePath } alt={data.image}/>
														</div>
													)
												}
												<div className={`mt-3`}>
													<div className="flex items-center justify-center w-full">
														<label htmlFor="department-image" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  hover:bg-gray-100">
															<div className="flex flex-col items-center justify-center pt-5 pb-6">
																<svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
																	<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
																				d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
																	/>
																</svg>
																<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
																	<span className="font-semibold">Click to upload</span> or drag and drop
																</p>
																<p className="text-xs text-gray-500 dark:text-gray-400">
																	SVG, PNG, JPG or GIF (MAX. 800x400px)
																</p>
															</div>
															<input id="department-image" name={`image`} type="file" className="hidden"
																onChange={e => handleImageUpload(e)}
															/>
														</label>
													</div>

												</div>
											</div>

										</div>
                    
										<div className="w-full flex flex-col">
												<div className="form-group mb-5">
													<label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="">Icons</label>

													{
														iconPath && (
															<div className={`mt-3`}>
																<img className='h-24' src={ iconPath } alt={data.name}/>
															</div>
														)
													}
													<div className={`mt-3`}>
														<div className="flex items-center justify-center w-full">
															<label htmlFor="department-icon" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  hover:bg-gray-100">
																<div className="flex flex-col items-center justify-center pt-5 pb-6">
																	<svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
																		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
																					d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
																		/>
																	</svg>
																	<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
																		<span className="font-semibold">Click to upload</span> or drag and drop
																	</p>
																	<p className="text-xs text-gray-500 dark:text-gray-400">
																		SVG, PNG, JPG or GIF (MAX. 800x400px)
																	</p>
																</div>
																<input id="department-icon" name={`icon`} type="file" className="hidden"
																	onChange={e => handleImageUpload(e)}
																/>
															</label>
														</div>

													</div>
											</div>
										</div>
									</div>
									<div className="column flex">
										<div className="w-full">
											<button className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}>
												Update
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</AuthenticatedLayout>
		</>
	)
}
