import {useEffect, useRef, useState} from "react";
import ReactPlayer from "react-player";

export default function SelfWebCam(){

	const [ ownStream, setOwnStream ] = useState(null);
	const videoRef = useRef(null);
	const recordedChunks = [];
	let mediaRecorder;


	const init = async () => {
		try{
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true, audio: true
			})
			// const url = URL.createObjectURL(stream)
			const video = videoRef.current;
			video.onloadedmetadata = function(e) {
				video.play();
			};
			video.srcObject = stream;
			setOwnStream(stream)
		}catch (e) {
			console.log(e)
		}
	}


	useEffect(() => {

	}, []);

	const stopWebCam = (e) => {
		e.preventDefault();
		if(ownStream){
			try{
				ownStream.getTracks().forEach((track) => {
					track.stop();
				})
				setOwnStream(null)
			}catch(e){
				// Error
			}
		}
	}

	const handleDataAvailable = (event) => {
		if (event.data.size > 0) {
			recordedChunks.push(event.data);
			console.log(recordedChunks);
			download();
		} else {
			// …
		}
	}

	function download() {
		const blob = new Blob(recordedChunks, {
			type: "video/webm",
		});
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		document.body.appendChild(a);
		a.style = "display: none";
		a.href = url;
		a.download = "test.webm";
		a.click();
		window.URL.revokeObjectURL(url);
	}
	const recordStart = () => {
		if(ownStream && ownStream.getTracks()){
			mediaRecorder = new MediaRecorder(ownStream, {
			 	mimeType: "video/webm; codecs=vp9"
			})
			mediaRecorder.ondataavailable = handleDataAvailable;
			mediaRecorder.start();
		}
	}

	const recordStop = () => {
		mediaRecorder.stop();
	}

	return (
		<>
			<div>
				<div className={`mb-4`}>
					<button
						className={`bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
						onClick={e => init()}>Start</button>
					<button className={`ml-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
						onClick={ e => stopWebCam(e) }
					>
						Stop
					</button>
				</div>
				<div className={`mb-3`}>
					{/*<ReactPlayer url={ownStream} />*/}

					<video className={`w-full aspect-auto`} width={`100%`}  ref={ videoRef }>

					</video>
				</div>
				<div className="w-full mb-3 gap-4">
					<button className={`bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
						onClick={ recordStart }
					>
						Record Start
					</button>
					<button className={`ml-4 bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
						onClick={ recordStop }
					>
						Record Stop
					</button>
				</div>

			</div>
		</>
	)
}
