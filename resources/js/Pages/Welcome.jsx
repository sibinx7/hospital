import { Link, Head } from '@inertiajs/react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import MakeAppointment from "@/Widgets/MakeAppoinment.jsx";
import DepartmentCards from "@/Widgets/DepartmentCards.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion, departments }) {
    return (
        <>
            <GuestLayout>
                <Head title="Welcome" />
                <div>
									<MakeAppointment departments={departments}/>
                </div>
								<div>
									<DepartmentCards/>
								</div>
            </GuestLayout>

        </>
    );
}
