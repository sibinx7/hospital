import Phone from "@mui/icons-material/Phone";
import LocationOn from "@mui/icons-material/LocationOn";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import {Divider, Stack} from "@mui/material";
import Media from "@/Common/Media.jsx";


export default function ContactHeader(){
	return(
		<>
			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
				<div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl">
					<a href="https://flowbite.com" className="flex items-center">
						<img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
					</a>
					<div className={``}>
						<Stack
							direction={'row'}
							divider={<Divider orientation="vertical" flexItem />}
							spacing={2}
						>
							<div>
								<div>
									<Media Icon={<Phone className={``}/>}
												 title={`Call us now`}
												 description={`+1-888-987-6543`}></Media>
								</div>
								<div>

								</div>
							</div>
							<div>
								<Media Icon={<LocationOn/>}
											 title={`121 Park Drive`}
											 description={`Varik St, Newyork 1006`}></Media>
							</div>
							<div>
								<Media Icon={<CalendarMonth/>}
											 title={`Mon - Sun`}
											 description={`09:00am to 06:00pm`}></Media>

							</div>
						</Stack>
					</div>
				</div>

			</nav>
		</>
	)
}

