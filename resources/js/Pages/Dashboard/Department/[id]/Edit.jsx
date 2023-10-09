import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from "@inertiajs/react";
import {useState} from "react";
import DepartmentForm from '../Form/Form';

export default function Edit({ auth, department, departments=[] }){
	// debugger


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
                <DepartmentForm department={department} departments={departments}/>
							</div>
						</div>
					</div>
				</div>
			</AuthenticatedLayout>
		</>
	)
}
