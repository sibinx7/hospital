import SocialMediaList from "@/Common/SocialMediaList.jsx";

export default function TopHeader(){
	return(
		<>
			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
				<div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl">
					<div>

					</div>
					<div>
						<SocialMediaList/>
					</div>
				</div>
			</nav>
		</>
	)
}
