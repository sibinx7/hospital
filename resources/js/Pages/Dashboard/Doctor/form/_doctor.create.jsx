import { useState } from "react";
import DoctorUserForm from "./_doctor.user";
import DoctorAccademicForm from "./_doctor.accademic";
import DoctorEmployeeForm from "./_doctor.employee";

export default function DoctorCreateForm() {
	const [activeTab, setActiveTab] = useState(0);

	const changeActiveTab = (e, index) => {
    if(activeTab !== index){
      setActiveTab(index)
    }
    
  };
  const isActiveElement = (index, element='div') => {
    if(element === 'li'){
      return activeTab === index ? 'text-blue-600 dark:text-blue-500': 'cursor-pointer text-gray-500 dark:text-gray-400';
    }
    return activeTab === index ? 'border-blue-600 dark:border-blue-500': 'border-gray-500 dark:border-gray-400';
    
  }

	return (
		<div>
			<div className="block mb-5">
				<ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
					<li className={`flex items-center ${isActiveElement(0, 'li')} `}>
						<div
							className="flex space-x-2.5 items-center"
							onClick={(e) => changeActiveTab(e,0)}
						>
							<span className={`flex items-center justify-center w-8 h-8 border  rounded-full shrink-0 ${isActiveElement(0)}`}>
								1
							</span>
							<span>
								<h3 className="font-medium leading-tight">User info</h3>
								<p className="text-sm">Step details here</p>
							</span>
						</div>
					</li>
					<li className={`flex items-center ${isActiveElement(1, 'li')} `}>
						<div
							className="flex space-x-2.5 items-center"
							onClick={(e) => changeActiveTab(e,1)}
						>
							<span className={`flex items-center justify-center w-8 h-8 border  rounded-full shrink-0 ${isActiveElement(1)}`}>
								2
							</span>
							<span>
								<h3 className="font-medium leading-tight">Accademic info</h3>
								<p className="text-sm">Step details here</p>
							</span>
						</div>
					</li>
					<li className={`flex items-center ${isActiveElement(2, 'li')}`}>
						<div
							className="flex space-x-2.5 items-center"
							onClick={(e) => changeActiveTab(e,2)}
						>
							<span className={`flex items-center justify-center w-8 h-8 border  rounded-full shrink-0 ${isActiveElement(2)}`}>
								3
							</span>
							<span>
								<h3 className="font-medium leading-tight">Employee info</h3>
								<p className="text-sm">Step details here</p>
							</span>
						</div>
					</li>
				</ol>
			</div>
      <div>
        { activeTab === 0 && <DoctorUserForm/>}
        { activeTab === 1 && <DoctorAccademicForm/>}
        { activeTab === 2 && <DoctorEmployeeForm/>}
      </div>
		</div>
	);
}
