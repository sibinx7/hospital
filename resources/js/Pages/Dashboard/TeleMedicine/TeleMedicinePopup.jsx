import { CommonIcons } from "@/Utilities/icons";
export default function TeleMedicinePopup({ show=false, id='default-telemedicine-popup', doctor={}, ...props}){
  const closeModal = (e) => {
    e.preventDefault();
    props.closeModal(true)
  }

  return (
    <div
  id={id}
  tabIndex={-1}
  aria-hidden="true"
  className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 ${!show && 'hidden'} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
>
  <div className="relative w-full max-w-2xl max-h-full">
    {/* Modal content */}
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
      {/* Modal header */}
      <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
        <h3 className="text-xl block w-full pl-7  text-center font-semibold text-gray-900 dark:text-white">
          { doctor.name || 'Doctor Strange' }
        </h3>
        <button
          type="button" onClick={ e => closeModal(e)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="defaultModal"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      {/* Modal body */}
      <div className="p-6 space-y-6">
        <div className="flex justify-center align-center">
          <div className="">
          <img className="w-[120px] h-[120px] p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={ doctor.avatar} alt={doctor.name}/>
          </div>
        </div>
        <div className="flex justify-center text-center">
        <table className="table">
          <tbody>
            <tr>
              <td>Name </td>
              <td> { doctor.name } </td>
            </tr>
            <tr>
              <td>Speciality</td>
              <td> { doctor.speciality } </td>
            </tr>
           {
            doctor.bio && (
              <tr>
                <td> About </td>
                <td> {doctor.bio }</td>
              </tr>
            )
           }
          </tbody>
        </table>
        </div>

      </div>
      {/* Modal footer */}
      <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button
          data-modal-hide="defaultModal"
          type="button"
          className="flex align-center text-white-500 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-white-900 focus:z-10 "
        >
          <span>
            <img className="h-5 mr-3" src={ CommonIcons.CallIcon} alt="Call end" />
          </span>
          <span className="text-white">
            Call End 
          </span>          
        </button>
      </div>
    </div>
  </div>
</div>

  )
}