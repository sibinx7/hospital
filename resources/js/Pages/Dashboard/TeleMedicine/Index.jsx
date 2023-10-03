import {Head} from "@inertiajs/react";
import Peer from "simple-peer";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SelfWebCam from "@/Components/SelfWebCam.jsx";
import { useRef, useState  } from "react";
import ListOnlineDoctors from "@/Components/ListOnlineDoctors";


import callVideo from "../../../../icons/callmessage/call-phone.svg";
import messageIcon from "../../../../icons/callmessage/message-icon.svg";
export default function Index({ auth }){

  const otherCamVideo = useRef();

  const [ onCall, setOnCall ] = useState(false);
  const [ selectedDoctor, setSelectedDoctor ] = useState(null);

  const PeerOwn = new Peer( { initiator: true });
  const PeerOther = new Peer();


  const handleOwnMediaCallback = (stream) => {
    PeerOwn.addStream(stream);
  }

  PeerOwn.on('signal', (data) => {
    PeerOther.signal(data)
  });

  PeerOther.on('signal', (data) => {
    PeerOwn.signal(data)
  });

  PeerOther.on('stream', (stream) => {
    
  });

  PeerOwn.on('connect', () => {
    PeerOwn.send('Hey! Peer Own Send');
    
  })

  PeerOther.on('data', (data) => {
    console.log('Message from PeerOther', data)
  })
  
  const handleInitiateCall = (doctor) => {
    if(doctor){
      setOnCall(true);
      setSelectedDoctor(doctor)
    }    
  }

  const handleInitiateTeleCall = (e) => {
    e.preventDefault();
  }

  const handleInitiateMessage = (e) => {
    e.preventDefault();
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
                      { !onCall && <ListOnlineDoctors initiateCallToDoctor={ handleInitiateCall }/> }
                      { /* If User on Call show On going Call, Doctor, Disconnect, Mute buttons  */}

                    </div>
									</div>
									<div className="basis-8/12">
                    <div className="flex w-full flex-col">
                      <div className="flex w-full h-full justify-center border-lime-100">
                        {/* If no doctor selected, show some telemedicine features */}
                        <div className="">

                        </div>
                        { /* end telemedicine fetaures */}
                        
                        {/* Start: User selected Doctor */}
                        <div className="">
                          {/* Start: User Start Video/Audio Screen with optional message */}
                          <div className="">
                            <div className="">

                            </div>
                            <div className="">
                              <div className="flex justify-center">
                                <div className="flex justify-center">
                                  <button  onClick={e => handleInitiateTeleCall(e) } className="flex align-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                                    <span>
                                      <img className="h-5" src={callVideo} alt="Call" />
                                    </span>
                                    <span className="ml-2">
                                      Call
                                    </span>
                                  </button>
                                  <button onClick={ e => handleInitiateMessage(e) } className="flex align-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    <span>
                                      <img className="h-5" src={messageIcon} alt="Message" />
                                      </span>
                                      <span className="ml-2">
                                        Message
                                      </span>                                  
                                  </button>
                                </div>
                              </div>
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
				</div>
			</AuthenticatedLayout>
		</>
	)
}
