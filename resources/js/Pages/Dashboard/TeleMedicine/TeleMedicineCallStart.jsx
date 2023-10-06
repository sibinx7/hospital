import callVideo from "../../../../icons/callmessage/call-phone.svg";
import messageIcon from "../../../../icons/callmessage/message-icon.svg";

export default function TeleMedicineCallStart({ doctor, ...props}){
  return (
    <div className="flex w-full h-full">
      <div className="flex justify-center items-center">
        <button  onClick={e => handleInitiateTeleCall(e) } className="flex align-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          <span>
            <img className="h-5" src={callVideo} alt="Call" />
          </span>
          <span className="ml-2">
            Call
          </span>
        </button>
        <button onClick={ e => handleInitiateMessage(e) } className="ml-2 flex align-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <span>
            <img className="h-5" src={messageIcon} alt="Message" />
            </span>
            <span className="ml-2">
              Message
            </span>                                  
        </button>
      </div>
    </div>
  )
}