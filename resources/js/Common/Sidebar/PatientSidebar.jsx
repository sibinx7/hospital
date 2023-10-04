import { Link } from "@inertiajs/react";

import { SidebarIcons } from "@/Utilities/icons"; 

export default function PatientSidebar(){
  return(
    <>
    <li>
      <Link href="/dashboard/features/telemedicine">
        <span>
          <img src={ SidebarIcons.TeleMedicine } alt="Telemedicine" />
        </span>
        <span>
          TeleMedicine 
        </span>
      </Link>
    </li>
    <li>

    </li>
    </>
  )
}