import MainHeader from "@/Common/MainHeader.jsx";
import ContactHeader from "@/Common/ContactHeader.jsx";
import TopHeader from "@/Common/TopHeader.jsx";

export default function Header(){
	return(
		<>
			<header>
				<TopHeader/>
				<ContactHeader/>
				<MainHeader/>
			</header>
		</>
	)
}
