import { Link } from "@inertiajs/react";

import { SidebarIcons } from "@/Utilities/icons"; 

export default function PatientSidebar(){
  return(
    <>
    <li>
      <Link href="/dashboard/features/telemedicine">
        <div className="flex items-center">
          <img className="h-7 mr-1" src={ SidebarIcons.TeleMedicine } alt="Telemedicine" />
          <span>
            TeleMedicine 
          </span>
        </div>

      </Link>
    </li>
    <li>

    </li>
    </>
  )
}