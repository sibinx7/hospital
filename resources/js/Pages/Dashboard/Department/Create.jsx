import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DepartmentForm from './Form/Form';
import { Head } from '@inertiajs/react';

export default function DepartmentCreate({ auth,department={}, departments=[], ...props}){  
  return(
    <>
      <AuthenticatedLayout user={auth.user}
				header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Department +</h2>}>
        <Head title="Create Department" />
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