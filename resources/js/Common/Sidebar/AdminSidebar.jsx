import { Link } from "@inertiajs/react";
import AccordionSideMenu from "../AccordionSidemenu";

export default function AdminSidebar(){
  return(
    <>
      <li>
        <AccordionSideMenu id='department-accordio' title={`Department`} open={false}>
          <ul>
            <li>
              <div className="flex p-x-1 p-y-2 border-t-1 border-b-1 border-gray-100">
                <Link href="/dashboard/staff/department/index">List</Link>
              </div>
            </li>
            <li>
              <div className="flex p-x-1 p-y-2 border-t-1 border-b-1 border-gray-100">
                <Link href="/dashboard/staff/department/create">Create</Link>
              </div>              
            </li>
          </ul>
        </AccordionSideMenu>    
      </li>
    </>
  )
}