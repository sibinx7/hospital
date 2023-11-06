import {Head, Link} from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BreadCrumb from "@/Common/breadcrumb";
import DoctorCreateForm from "./form/_doctor.create";



export default function Create({ auth, breadcrumbs=[] }){



  return (
    <AuthenticatedLayout
				user={auth.user}
				header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
      <Head title="Doctor" />
      <BreadCrumb breadcrumbs={ breadcrumbs}/>
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-x-auto p-6">
          <div className={`block p-6 bg-white border border-gray-200 rounded-lg shadow`}>
            <div className="flex flex-row">
              <div className="basis-full">
                <DoctorCreateForm/>               
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}