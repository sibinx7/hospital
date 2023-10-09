import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function DepartmentCreate({ auth, departments, ...props}){
  return(
    <>
      <AuthenticatedLayout user={auth.user}
				header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Department +</h2>}>
          <Head title="Create Department" />
				<div>
					<div className="w-full mx-auto">
						<div className="relative overflow-x-auto p-6">

            </div>
          </div>
        </div>          
      </AuthenticatedLayout>
    </>
  )
}