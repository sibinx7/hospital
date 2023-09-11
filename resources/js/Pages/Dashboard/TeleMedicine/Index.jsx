import {Head} from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SelfWebCam from "@/Components/SelfWebCam.jsx";
export default function Index({ auth }){
	return(
		<>
			<AuthenticatedLayout
				user={auth.user}
				header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
			>
				<Head title="Features" />
				<div>
					<div className="max-w-7xl mx-auto">
						<div className="relative overflow-x-auto p-6">

							<div className={`block p-6 bg-white border border-gray-200 rounded-lg shadow`}>
								<div className="flex flex-row">
									<div className="basis-4/12">
										<div>
											<SelfWebCam/>
										</div>
									</div>
									<div className="basis-8/12">
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
