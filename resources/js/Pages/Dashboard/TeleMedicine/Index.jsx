import {Head} from "@inertiajs/react";
import Peer from "simple-peer";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SelfWebCam from "@/Components/SelfWebCam.jsx";
import { useRef, useState  } from "react";
import ListOnlineDoctors from "@/Components/ListOnlineDoctors";



import TeleMedicinePopup from "./TeleMedicinePopup";
import TeleMedicineCallStart from "./TeleMedicineCallStart";
import TeleMedicineBenefits from "./TeleMedicineBenefits";
export default function Index({ auth = {} }){

  const otherCamVideo = useRef();
  const { user } = auth;
  let isPatient = false;
  if(user){
    isPatient = user.role === 'patient';
  }

  const [ onCall, setOnCall ] = useState(false);
  const [ selectedDoctor, setSelectedDoctor ] = useState(null);
  const [ isCalling, setIsCalling ] = useState(false);

  const PeerOwn = new Peer( { initiator: isPatient });
 

  const [peerOwnSignal, setPeerOwnSignal] = useState(null);
 

  const handleOwnMediaCallback = (stream) => {
    PeerOwn.addStream(stream);
  }

  PeerOwn.on('signal', (data) => {
    
    // PeerOther.signal(data)
    setPeerOwnSignal(data);
  });

 
  

  PeerOwn.on('connect', () => {
    PeerOwn.send('Hey! Peer Own Send');
    
  })

 
  
  const handleInitiateCall = (doctor) => {
    if(doctor){
      setOnCall(true);
      setSelectedDoctor(doctor)
    }    
  }

  const handleInitiateTeleCall = (e) => {
    e.preventDefault();
    setIsCalling(true);
  }

  const handleInitiateMessage = (e) => {
    e.preventDefault();
  }

  const handleTeleMedicinePopupClose = (e) => {
    setIsCalling(false);
  }

  const cancelSelectedDoctor = (e) => {
    setSelectedDoctor(null);
    setOnCall(false)
  }
	return(
		<>
			<AuthenticatedLayout
				user={auth.user}
				header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
			>
				<Head title="Features" />
				<div>
					<div className="max-w-7xl mx-auto">
						<div className="relative overflow-x-auto p-6">

							<div className={`block p-6 bg-white border border-gray-200 rounded-lg shadow`}>
								<div className="flex flex-row">
									<div className="basis-4/12">
										<div>
											<SelfWebCam ownMediaCallback={ e => handleOwnMediaCallback(e) }/>
										</div>
                    <div >
                      { /* if there no call then show list of online doctors  */}
                      {  <ListOnlineDoctors isOnCall={onCall} initiateCallToDoctor={ handleInitiateCall }/> }
                      { /* If User on Call show On going Call, Doctor, Disconnect, Mute buttons  */}

                    </div>
									</div>
									<div className="basis-8/12">
                    <div className="flex w-full flex-col h-full">
                      <div className="flex w-full h-full justify-center border-lime-100">
                        {/* If no doctor selected, show some telemedicine features */}
                        <div className="">

                        </div>
                        { /* end telemedicine fetaures */}
                        
                        {/* Start: User selected Doctor */}
                        <div className="w-full h-full">
                          {/* Start: User Start Video/Audio Screen with optional message */}
                          <div className="w-full h-full">
                            <div className="">

                            </div>
                            <div className="telemedicine-background w-full h-full items-center justify-center flex">
                              {
                                !selectedDoctor && (
                                  <div>
                                    <TeleMedicineBenefits/> 
                                  </div>
                                )
                              }
                              {
                                selectedDoctor && (
                                  <div className="flex justify-center items-center">
                                    <TeleMedicineCallStart doctor={selectedDoctor} 
                                      handleInitiateTeleCall={handleInitiateTeleCall }
                                      handleInitiateMessage={handleInitiateMessage}
                                      cancelSelectedDoctor={cancelSelectedDoctor}/>
                                  </div>  
                                )
                              }
                            </div>
                          </div>
                          {/* End: User Start Video/Audio Screen with optional message */}
                          {/* Start: User on video/audio call with doctor  */}
                          <div className="flex">
                            <video className="w-full aspect-video" ref={ otherCamVideo }></video>
                          </div>
                          {/* End: User on video/audio call with doctor  */}
                        </div>
                        {/* End: User selected Doctor */}                        
                      </div>                                           
                    </div>
									</div>
								</div>
							</div>
						</div>
					</div>
          <div>
            { isCalling && <TeleMedicinePopup doctor={selectedDoctor} show={isCalling} closeModal={handleTeleMedicinePopupClose} />}
          </div>
				</div>
			</AuthenticatedLayout>
		</>
	)
}
