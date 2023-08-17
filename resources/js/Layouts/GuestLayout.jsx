import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Header from "@/Common/Header.jsx";

export default function Guest({ children }) {
    return (
			<div>
				<Header></Header>
				<div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
					<div className="w-full sm:max-w-md mt-6 px-6 py-4 overflow-hidden sm:rounded-lg">
							{children}
					</div>
				</div>
			</div>
    );
}
