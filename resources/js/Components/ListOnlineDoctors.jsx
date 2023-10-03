import { useState } from "react";
import { getOnlineDoctors } from "@/Service/api";
import {useEffect} from "react";
import userProfile from "../../images/user/user.png";

export default function ListOnlineDoctors() {

	/**
	 * @description Get list of online doctors from api endpoint
	 */
  const [ onlineDoctors, setOnlineDoctors ] = useState([])
	const listOfDoctor = async () => {
    const response  = await getOnlineDoctors();
    if(response && Array.isArray(response.online_doctors)){
      setOnlineDoctors(response.online_doctors);
    }
     
	}

  Echo.channel('users-online').listen('.user_login_logout', () => {
    listOfDoctor();

  })

	/**
	 * @description Mount and Unmount
	 */
	useEffect(() => {
    listOfDoctor();
		return() => {

		}
	}, []);

  const handleInitiateCall = (e, doctor) => {
    e.preventDefault();
    props.initiateCallToDoctor(doctor)
  }

	return(<>
    <div>
      <div>
        {
          onlineDoctors.length && (
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                {
                  onlineDoctors.map((doctor, index) => {
                    if(!doctor.avatar){
                      doctor.avatar = userProfile;
                    }
                    return(
                      <>
                        <li className="pt-3 pb-3 sm:pb-4 cursor-pointer" key={doctor.id}>
                          <div className="flex items-center space-x-4" onClick={ e => handleInitiateCall(e, doctor)}>
                            <div className="flex-shrink-0">
                              <img className="w-8 h-8 rounded-full" src={doctor.avatar} alt={ doctor.name }/>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white"> { doctor.name } </p>
                              <p className="text-sm text-gray-500 truncate dark:text-gray-400"> { doctor.email }</p>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="flex align-center justify-center">
                                <div className="flex w-3 h-3 bg-green-500 rounded-full">

                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </>
                    )
                  })
                }
              </ul>
            </div>
          )
        }
      </div>
    </div>
  </>)
}
