import {Head, Link} from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BreadCrumb from "@/Common/breadcrumb";

export default function Show({ auth, doctor, breadcrumbs }){
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
                <div className="basis-1/4">
                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center p-10">
                      {
                        doctor.profile_picture && <img
                          className="w-24 h-24 mb-3 rounded-full shadow-lg"
                          src={ doctor.profile_picture }
                          alt={ doctor.name }
                        />
                      }
                      <h5 className="mb-1 text-center text-xl font-medium text-gray-900 dark:text-white">
                        { doctor.name }
                      </h5>
                      <span className="text-sm text-center text-gray-500 dark:text-gray-400">
                        { doctor.position }
                      </span>
                      <div className="flex mt-4 space-x-3 md:mt-6">
                        <a
                          href="#"
                          className="inline-flex items-center px-4 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                          </svg>
                        </a>

                        <a
                          href="#"
                          className="inline-flex items-center px-4 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                      </div>

                    </div>
                  </div>                  
                </div>
                <div className="basis-full">
                  <div className="pr-10 pl-10 w-full h-full">
                  <table className='table-auto w-full h-full'>
                    <tbody>
                      <tr>
                        <td className="pl-5 pr-5">Name</td>
                        <td className="pl-5 pr-5">
                          <span className="">{ doctor.name }</span>
                        </td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="pl-5 pr-5">Biography</td>
                        <td className="pl-5 pr-5">
                          <div dangerouslySetInnerHTML={{ __html: doctor.short_bio}}>

                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-5 pr-5">Position</td>
                        <td className="pl-5 pr-5"> { doctor.speciality} </td>
                      </tr>
                      <tr className="bg-gray-100 ">
                        <td className="pl-5 pr-5">Country</td>
                        <td className="pl-5 pr-5"> { doctor.country || 'India' } </td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </AuthenticatedLayout>
  )
}