import AdminSidebar from "./Sidebar/AdminSidebar";
import DoctorSidebar from "./Sidebar/DoctorSidebar";
import PatientSidebar from "./Sidebar/PatientSidebar";

export default function MainSidebar({ user }){
  const { role } = user;
  return(
    <>
    <aside
      id="default-sidebar"
      className="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            
          </li>
          { role=== 'patient' &&  <PatientSidebar/> }
          { role === 'doctor' && <DoctorSidebar/> }
          { role === 'administrator' && <AdminSidebar/> }
          <li>
            <hr />
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    </>
  )
}