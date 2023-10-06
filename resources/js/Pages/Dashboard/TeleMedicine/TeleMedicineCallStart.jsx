import callVideo from "../../../../icons/callmessage/call-phone.svg";
import messageIcon from "../../../../icons/callmessage/message-icon.svg";

export default function TeleMedicineCallStart({ doctor, ...props}){
  const cancelSelectedDoctor = (e) => {
    e.preventDefault();
    props.cancelSelectedDoctor(true)
  }
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <div className="image-container rounded-full bg-white border-white border-4 mb-7 overflow-hidden">
            <img className="w-48 h-48 object-fill" src={doctor.avatar} alt={ doctor.name } />
          </div>
          <div className="flex flex-col mb-7">
            <div className="block bg-white border-1 shadow-sm py-5 px-7 border-gray-400 rounded-md">
              <h4 className="text-center text-[24px]">{ doctor.name }</h4>
              {
                doctor.specification &&<p>
                Specification: <span>{ doctor.specification }</span>
              </p>
              }
              {
                doctor.bio && <p>
                { doctor.bio }
              </p>
              }
              
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button  onClick={e => props.handleInitiateTeleCall(e) } className="flex align-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          <span>
            <img className="h-5" src={callVideo} alt="Call" />
          </span>
          <span className="ml-2">
            Call
          </span>
        </button>
        <button onClick={ e => props.handleInitiateMessage(e) } className="ml-2 flex align-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <span>
            <img className="h-5" src={messageIcon} alt="Message" />
            </span>
            <span className="ml-2">
              Message
            </span>                                  
        </button>
        <button onClick={e => cancelSelectedDoctor(e)} className="bg-red-500 ml-2 rounded-full p-2">
          <span className="text-white px-2 inline-block">X</span>
        </button>
      </div>
      <div>

      </div>
    </div>
  )
}